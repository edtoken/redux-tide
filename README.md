# Redux tide
Simple library for redux-normalized state and actions/selectors for it

### Examples
[example](https://edtoken.github.io/redux-tide-basic-usage/) - using with axios and REST api
[video](https://cl.ly/3d183v352O24) - short video for demonstration

### Future features
* Create documentation
* Refactor code

### 4 Steps for using redux-tide
1. your project must have: [normalizr](https://github.com/paularmstrong/normalizr), [redux](https://redux.js.org/), [react-redux](https://github.com/reactjs/react-redux), [redux-thunk](https://github.com/gaearon/redux-thunk)
2. `npm install redux-tide --save`
3. ```
    // schema.js
    import {schema} from 'normalizr'
    
    const postsSchema = new schema.Entity('posts')
    const commentsSchema = new schema.Entity('comments')
    
    postsSchema.define({
      comments: [commentsSchema]
    })
    commentsSchema.define({
      post: commentsSchema
    })
    
    export const appSchema = {
      commentsSchema,
      postsSchema
    }
     
    ```
4. ```
    // store.js
    import {denormalize} from 'normalizr';
    import {createReducers, setDefaultResponseMapper, setDenormalize} from 'redux-tide';
    import {appSchema} from './store'
    
    // required
    setDenormalize(denormalize)
    
    // not required
    setDefaultResponseMapper((resp) => {
      // your response
      return resp.data
    })
    
    // your store
    export default createStore(
      combineReducers({
        // your reducers
        ...createReducers(...appSchema)
      }),
      initialState,
      composedEnhancers
    )
    
    ```

5. READY! You can create actions und use it

### Create actions and get data
```
const get = (url) => {// returns Promise ajax call}

const getUserAction = createAction(user, get, 'user')
// calling url 'user'

const getUserAction = createAction(user, () => {
 return new Promise((resolve, reject) => {
   // cookie|local storage|other get data
   resolve({
     //data
   })
 })
})

const getUserAction = createAction(user, get, (userId) => `user/${userId}`)
// calling url 'user/${userId}'

const getUserAction = createAction(user, get, (userId) => [
 `user/${userId}`,
 undefined,
 {name, phone, email}
])
// calling url 'user/${userId}' and post data (if you are using axios) {name, phone, email}

// you can pass multi level functions or promises (args) => (dispatch, getState) => (dispatch, getState) => (dispatch, getState) => ...
const getUserAction = createAction(user, get, (userId) => {
 return (dispatch, getState)=>{
   return new Promise((resolve) => {resolve(`user/${userId}`)})
 }
})
// calling url 'user/${userId}'

const getUserAction = createAction(user, get, 'user', (resp) => {resp.data})
// calling url 'user' but replace backend success response to resp.data


// using with multiple entity ids
const getUserByIdAction = createAction(user, get, userId => `users/${userId}`)


class UserComponent extends Component {
}

const UserContainer = connect(
    (state)=>({
        userData: getActionData(getUserByIdAction.withPrefix(userId))(state, props)
    }),
    (dispatch)=>({
        getUser:(userId) => (dispatch(getUserByIdAction.withPrefix(userId)(userId))
    })
)(UserComponent)

// calling url 'user' but replace backend success response to resp.data
```

### CreateAction result public methods
```
  /**
   * @type {Function}
   * @returns {Function} - returns action id
   */
  Action.type = Action.actionId = Action.toString = Action.valueOf = () => {
    return actionId
  }

  /**
   * @param {Object} item - source entity data
   *
   * @type {Function}
   * @returns {Function} - returns id from source
   */
  Action.getEntityId = item => {
    return scheme.getId(item)
  }

  /**
   * @type {Function}
   * @returns {Function} - returns entity uniq name (id)
   */
  Action.getEntityName = () => {
    return scheme.key
  }

  /**
   * @type {Function}
   * @returns {Action} - returns some action with new uniq id
   */
  Action.clone = () => {
    return createAction(scheme, actionMethod, queryBuilder, responseMapper)
  }

  /**
   * @type {Function}
   * @returns {Action} - returns some action with prefix-id
   */
  Action.withPrefix = (...prefix) => {
    return _makeWithId(prefix.join('-'))
  }

  /**
   * @type {Function}
   * @returns {Action} - returns some action with name-id (see prefix)
   */
  Action.withName = name => {
    return _makeWithId(name)
  }
```

### Selector properties
```
{String} status - pending|success|error
{Number} time - timestamp of action
{Boolean} hasError - has error or not
{String} errorText - text of error
{Boolean} isFetching - status === 'pending'
{Object|Array} payload - response for current action
{Object|Array} prevPayload - previous response 
```
