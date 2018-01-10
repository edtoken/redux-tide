# Redux tide

[website](https://edtoken.github.io/redux-tide)  
[docs](https://edtoken.github.io/redux-tide/docs)  
[coverage-report](https://edtoken.github.io/redux-tide/coverage/lcov-report/index.html)  
Simple library for redux-normalized state and actions/selectors for it

[![Build Status](https://api.travis-ci.org/edtoken/redux-tide.svg?branch=master)](https://travis-ci.org/edtoken/redux-tide)
[![npm version](https://badge.fury.io/js/redux-tide.svg)](https://badge.fury.io/js/redux-tide)
[![Coverage Status](https://coveralls.io/repos/github/edtoken/redux-tide/badge.svg?branch=master)](https://coveralls.io/github/edtoken/redux-tide?branch=master)
[![Inline docs](https://inch-ci.org/github/edtoken/redux-tide.svg?branch=master)](https://inch-ci.org/github/edtoken/redux-tide)
[![HitCount](http://hits.dwyl.com/edtoken/redux-tide.svg)](http://hits.dwyl.com/edtoken/redux-tide)

[![NPM](https://nodei.co/npm/redux-tide.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/redux-tide/)

[![NPM](https://nodei.co/npm-dl/redux-tide.png?height=3)](https://nodei.co/npm/redux-tide/)



## Motivation
You don't need to create reducers for rest-api data  
You should create reducers only for business front-end logic  

## Examples
[blog](https://edtoken.github.io/redux-tide/?ex=blog) - using with axios and REST api  
[blog-source](https://github.com/edtoken/redux-tide/tree/master/website/src/blog) - blog demo source code    
[counter (soon)](https://edtoken.github.io/redux-tide/?ex=counter)  
[todos (soon)](https://edtoken.github.io/redux-tide/?ex=todos)  
[video](https://cl.ly/3d183v352O24) - short video for demonstration

## Installation
```
npm install redux-tide --save
```

## 4 Steps for using redux-tide
1. your project must have: [normalizr](https://github.com/paularmstrong/normalizr), [redux](https://redux.js.org/), [react-redux](https://github.com/reactjs/react-redux), [redux-thunk](https://github.com/gaearon/redux-thunk)
2. install redux-tide `npm install redux-tide --save`
3. define your entity-schema
    ```javascript
    // entity-schema.js
    import {schema} from 'normalizr'
    
    const postsSchema = new schema.Entity('posts')
    const commentsSchema = new schema.Entity('comments')
    
    postsSchema.define({
      comments: [commentsSchema]
    })
    commentsSchema.define({
      post: commentsSchema
    })
       
    const appSchema = {
      commentsSchema,
      postsSchema
    }
            
    export {
        postsSchema,
        commentsSchema,
        appSchema
    }
         
    ```
4. modify your store.js file 
    ```javascript
    // store.js
    import {denormalize} from 'normalizr';
    import {createReducers, setDefaultResponseMapper, setDenormalize} from 'redux-tide';
    import {appSchema} from './entity-schema'
    
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

5. READY! Now you can create actions and use it

# What is next?

## Create actions
```javascript
import {createAction} from 'redux-tide';
import {del, get, post, put} from '../RESTApi'
import {postsSchema} from 'entity-schema';
import {OPEN_EDIT} from './action-types'

/**
* createAction argumnents
*
* @param {String|Object} actionSchema - normalizr actionSchema item
* @param {Function|Promise} actionMethod
* @param {String|Function} [queryBuilder=undefined]
* @param {Function} [responseMapper=_defaultResponseMapper||callback from setDefaultResponseMapper]
**/

export const getAllPosts = createAction(
    postsSchema, 
    get, 
    `posts?_embed=comments&_order=desc` // simple static url
)

export const getPostById = createAction(
    postsSchema, 
    get, 
    postId => `posts/${postId}?_embed=comments` // url with property postId
)

export const delPostById = createAction(
    postsSchema, 
    del, 
    postId => `posts/${postId}` // url with property postId
)

export const updatePostById = createAction(
    postsSchema, 
    put, 
    (postId, data) => [
        `posts/${postId}`, // url with property
        undefined, // query params
        data // put body
    ]
)

export const createNewPost = createAction(
    postsSchema, 
    post, 
    data => [
        `posts`, // static url
        undefined, // query params
        data // post body
    ]
)

// basic redux action can be use
export const openEditPost = (postId) => {
  return {
    type:OPEN_EDIT,
    postId
  }
}

```

## Using selectors
```javascript
import {getActionData} from 'redux-tide';
import {
    createNewPost, 
    delPostById, 
    getAllPosts, 
    openEditPost
} from './actions';

export default connect(
  (state, props) => getActionData(getAllPosts)
)(SomeComponent)

export default connect(
  (state, props) => ({
    table: getActionData(getAllPosts)(state, props)
  })
)(SomeComponent)

// create custom selectors
const makeGetMergedActionData = (postId) => {
    return createSelector(
      [
        getActionData(updatePostById.withPrefix(postId)),
        getActionData(getPostById.withPrefix(postId)),
        someSelector // your selector
      ],
      (updateData, fetchData, someData) => {

        updateData = updateData || {}
        fetchData = fetchData || {}

        const sortedDataByUpdateTime = [updateData, fetchData].sort(item => item.time)

        return sortedDataByUpdateTime.reduce((memo, item) => {
          return Object.assign(memo, item)
        }, {someData})
      }
    )
    
```

### Selector response properties
```
{String} actionId - your action id
{*} sourceResult - your source response from server (not mapped response)
{String} status - pending|success|error
{Number} time - timestamp of action
{Boolean} hasError - has error or not
{String} errorText - text of error
{Boolean} isFetching - status === 'pending'
{Object|Array} payload - denormalized response for current action
{Object|Array} prevPayload - denormalized previous response
 
```



## Create middleware
```javascript
import {
    createNewPost, 
    delPostById, 
    getAllPosts, 
    openEditPost
} from './actions';

const createNewPostActionId = createNewPost.actionId()

// delete post using with prefix (post id query parameter), so need check parentActionId
const delPostByIdParentActionId = delPostById.actionId() 

// action id if you called delPostById.withPrefix(postId), where postId === 5
const delPostId5ActionId = delPostById.withPrefix(5).actionId()

export const middleware = store => next => action => {
       
    const result = next(action)
    
    switch (action.actionId) {
        // all actions createNew post
        case createNewPostActionId:
            if (action.status === 'success') {
                store.dispatch(openEditPost(action.payload))
                store.dispatch(getAllPosts())
            }
            break
            
        case delPostId5ActionId:
            if (action.status === 'success') {
                // post with id 5 is was deleted success 
            }
        
    }
       
    // we used action delPostById with prefix postId
    // for example dispatch(delPostById.withPrefix(postId)(postId)
    // so, actionId has postId in actionId
    // and if you want track all calls with any postId you hould used parentActionId property
    // parentActionId - it's actionId from action which was called .withPrefix(*)
    // so if you called delPostById.withPrefix()..., parrent action id - it's action id delPostById
    
    switch (action.parentActionId) {
        case delPostByIdParentActionId:
            if (action.status === 'success') {
                store.dispatch(getAllPosts())
                
                let delPostCurrentActionId = delPostById.withPrefix(action.payload).actionId()
                // it's actionid current deleted post === action.actionId
                
            }
            break
    }
}

```

# Other options to create an action? 

## Can i use custom server response mapper?
```javascript
// YES!
// calling url 'user' but replace backend success response to resp.data
// You always can be get source response data 
// from selector getActionData property sourceResult
export const getUserAction = createAction(
    user, 
    get, 
    'user', 
    (resp) => {resp.data}
)

 
```
## Whats else?

```javascript
// actions.js 

export const get = (url) => {// returns Promise ajax call}

// calling url 'user' used method get
export const getUserAction = createAction(
    user, 
    get, 
    'user'
)

// simple action used custom method for getting data
export const getUserAction = createAction(user, () => {
 return new Promise((resolve, reject) => {
   // cookie|local storage|other get data
   resolve({
     //data
   })
 })
})

// calling url 'user/${userId}'
export const getUserAction = createAction(
    user, 
    get, 
    (userId) => `user/${userId}`
)

// if you want to beautiful action store name in redux, 
// you should used this pattern
// calling url 'user/${userId}'
export const getUserAction = createAction(
    user, 
    get, 
    (userId) => `user/${userId}`
).withName('UsersAction')


// calling url 'user/${userId}' 
// and post data (if you are using axios) {name, phone, email}
export const getUserAction = createAction(
    user, 
    get, 
    (userId) => [
        `user/${userId}`,
        undefined,
        {name, phone, email}
    ]
)


// you can pass multi level functions or promises 
// (args) => (dispatch, getState) => (dispatch, getState) => (dispatch, getState) => ...
// calling url 'user/${userId}'
export const getUserAction = createAction(
    user, 
    get, 
    (userId) => {
        return (dispatch, getState)=>{
            return new Promise((resolve) => {
                resolve(`user/${userId}`)
            })
        }
    }
)

// calling url 'user' but replace backend success response to resp.data
export const getUserAction = createAction(
    user, 
    get, 
    'user', 
    (resp) => {resp.data}
)


// using with multiple entity ids (make two action ids and stores from simgle action)
export const getUserByIdAction = createAction(
    user, 
    get, 
    userId => `users/${userId}`
)


class UserComponent extends Component {
    // ...
}

const UserContainer = connect(
    (state)=>({
        userData: getActionData(getUserByIdAction.withPrefix(userId))(state, props)
    }),
    (dispatch)=>({
        getUser:(userId) => (dispatch(getUserByIdAction.withPrefix(userId)(userId))
    })
)(UserComponent)
```

## Additional information, createAction public methods
```javascript
// when you did action, you can use action public methods 
export const getAllPosts = createAction(
    postsSchema, 
    get, 
    `posts?_embed=comments&_order=desc` // simple static url
)

// you can call: 
// getAllPosts.type()
// getAllPosts.getEntityId(postObj)
// getAllPosts.getSchema() 
// getAllPosts.clone()
// getAllPosts.withPrefix(customPrefixId) // customPrefixId might be postId 
// getAllPosts.withName(yourCustomName)
// getAllPosts.clear()


/**
   * 
   * @type {Function}
   * @returns {Function} - returns action id
   */
  Action.type = Action.actionId = Action.toString = Action.valueOf = () => {
    return actionId
  }

  /**
   * 
   * @param {Object} item - source entity data
   *
   * @type {Function}
   * @returns {Function} - returns id from source
   */
  Action.getEntityId = item => {
    return actionSchema.getId(item)
  }

  /**
   * 
   * @type {Function}
   * @returns {Object} - returns actionSchema of action
   */
  Action.getSchema = () => {
    return actionSchema
  }

  /**
   * 
   * @type {Function}
   * @returns {Function} - returns entity uniq name (id)
   */
  Action.getEntityName = () => {
    return actionSchema.key
  }

  /**
   * 
   * @type {Function}
   * @returns {Action} - returns some action with new uniq id
   */
  Action.clone = () => {
    return createAction(
      actionSchema,
      actionMethod,
      queryBuilder,
      responseMapper
    )
  }

  /**
   * 
   * @type {Function}
   * @returns {Action} - returns some action with prefix-id
   */
  Action.withPrefix = (...prefix) => {
    return _makeWithId(prefix.join('-'))
  }

  /**
   *
   * @type {Function}
   * @returns {Action} - returns some action with name-id (see prefix)
   */
  Action.withName = name => {
    return _makeWithId(name)
  }

  /**
   * Clear action store data
   *
   * @memberOf action._makeAction.Action
   * @type {Function}
   *
   * @example
   * store.dispatch(userLoginAction.empty())
   *
   * @returns {Undefined} - returns None, only clear action data
   */
  Action.empty = () => {
    return (dispatch, getState) => {
      // ...
    }
  }
```

## Contributions
Use [GitHub issues](https://github.com/edtoken/redux-tide/issues) for requests.   
I actively welcome pull requests; learn how to contribute.   

## Changelog

## Future
* Improve documentation
* Improve tests
* Refactor code
* Delete it ``` setDenormalize(denormalize) ``` in your store.js file :) 
* Add new selectors
* Maybe? make redux-tide-storage (make storage) and redux-tide-orm (only selectors) packages

### Drink tea :)
