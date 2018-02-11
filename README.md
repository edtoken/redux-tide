# Redux tide
Simple library for helping created redux-normalized state.  
ActionCreator + ActionSelector, reducers are created automatically    

### Table of Contents
- [Features](#features)
- [Overview](#overview)
- [Examples](#examples)
- [Installation](#installation)
- [Usage](#usage)
- [Action](#action)
- [Reducer](#reducer)
- [Middleware](#middleware)
- [Selector](#selector)
- [Contributions](#contributions)
- [Changelog](#changelog)
- [License](#license)


[website](https://edtoken.github.io/redux-tide)  
[docs](https://edtoken.github.io/redux-tide/docs)  
[coverage-report](https://edtoken.github.io/redux-tide/coverage/lcov-report/index.html)  


[![Join the chat at https://gitter.im/practice-feature/redux-tide](https://badges.gitter.im/practice-feature/redux-tide.svg)](https://gitter.im/practice-feature/redux-tide?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)      

[![npm version](https://badge.fury.io/js/redux-tide.svg)](https://badge.fury.io/js/redux-tide)
[![Build Status](https://api.travis-ci.org/edtoken/redux-tide.svg?branch=master)](https://travis-ci.org/edtoken/redux-tide)
[![Maintainability](https://api.codeclimate.com/v1/badges/5952e9edfa038e49658f/maintainability)](https://codeclimate.com/github/edtoken/redux-tide/maintainability)
[![npm downloads](https://img.shields.io/npm/dm/redux-tide.svg?style=flat-square)](https://www.npmjs.com/package/redux-tide)
[![Coverage Status](https://coveralls.io/repos/github/edtoken/redux-tide/badge.svg?branch=master)](https://coveralls.io/github/edtoken/redux-tide?branch=master)
[![Inline docs](https://inch-ci.org/github/edtoken/redux-tide.svg?branch=master)](https://inch-ci.org/github/edtoken/redux-tide)  
[![dependencies Status](https://david-dm.org/edtoken/redux-tide/status.svg)](https://david-dm.org/edtoken/redux-tide)
[![devDependencies Status](https://david-dm.org/edtoken/redux-tide/dev-status.svg)](https://david-dm.org/edtoken/redux-tide?type=dev)
[![HitCount](http://hits.dwyl.com/edtoken/redux-tide.svg)](http://hits.dwyl.com/edtoken/redux-tide)

[![NPM](https://nodei.co/npm/redux-tide.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/redux-tide/)

--- 

### Motivation
You don't need to create reducers for rest-api data  
You should create reducers only for business front-end logic  

### Features
1. Simple actionCreator for any of your async library
2. Normalization state
3. Auto create reducers
4. Simple single selector for all your actions

### Overview
*Redux-Tide* - Do not force you to use only it,    
This is a small library helping you create normalization, actions, reducers and selector   
You can use it with any of other libraries  
You can add redux tide in any even old/new project  
Redux tide - it's concept for save your backend data, normalize, and selector for it    
```
                                        ┌───────────┐
                                        │   Some    │
                                        │Reducers...│    ┌──────────┐
                                        └───────────┘    │   Some   │    ┌───────────┐
                                        ╔═══════════╗    │ Selector │    │   Some    │
╔════════╗  ┌────────────┐  ┌────────┐┌▶║  Actions  ║    └──────────┘ ┌─▶│ Component │
║ Action ╠──▶ Async Rest ├──▶Response├┤ ║   Meta    ╠─┐               │  └───────────┘
╚════════╝  └────────────┘  └────────┘│ ╚═══════════╝ │  ╔══════════╗ │
                                      │ ╔═══════════╗ ├─▶║ Selector ╠─┘
                                      │ ║Normalized ║ │  ╚══════════╝
                                      └▶║   Data    ║─┘
                                        ╚═══════════╝
```
 

### Examples            
[blog](https://edtoken.github.io/redux-tide/?ex=blog) - using with axios and REST api  
[blog-source](https://github.com/edtoken/redux-tide/tree/master/website/src/blog) - blog demo source code    
[different-entity-id-example](https://edtoken.github.io/redux-tide?ex=different-entity-id)    
[different-entity-id-source](https://github.com/edtoken/redux-tide/tree/master/website/src/different-entity-id)  
[merged-actions-data-example](https://edtoken.github.io/redux-tide?ex=merged-actions-data)    
[merged-actions-data-source](https://github.com/edtoken/redux-tide/tree/master/website/src/merged-actions-data)  

### Installation
To install the stable version:

```
npm install redux-tide --save
```

#### Complementary Packages
Your project should have
[normalizr](https://github.com/paularmstrong/normalizr), [redux](https://redux.js.org/), [react-redux](https://github.com/reactjs/react-redux), [redux-thunk](https://github.com/gaearon/redux-thunk)
```
npm install normalizr --save
npm install redux --save
npm install react-redux --save
npm install redux-thunk --save
```

------
### Discussion
You can connect to [Gitter chat room](https://gitter.im/practice-feature/redux-tide)  
[![Join the chat at https://gitter.im/practice-feature/redux-tide](https://badges.gitter.im/practice-feature/redux-tide.svg)](https://gitter.im/practice-feature/redux-tide?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)   

### Usage
1. You might install library    
```
npm install redux-tide --save 
```  
2. Install [normalizr](https://github.com/paularmstrong/normalizr), [redux](https://redux.js.org/), [react-redux](https://github.com/reactjs/react-redux), [redux-thunk](https://github.com/gaearon/redux-thunk), you can use help [Complementary Packages](#complementary-packages)
  
3. Define entity-schema   
    ```javascript
    // entity-schema.js
    import {schema} from 'normalizr'
    
    const postsSchema = new schema.Entity('posts')
    const commentsSchema = new schema.Entity('comments')
    
    postsSchema.define({
      comments: [commentsSchema]
    })
    commentsSchema.define({
      post: postsSchema
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

4. Modify your store.js file 
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
5. Ready! Now you can use it. [Create action](#action)
------
### Discussion
You can connect to [Gitter chat room](https://gitter.im/practice-feature/redux-tide)  
[![Join the chat at https://gitter.im/practice-feature/redux-tide](https://badges.gitter.im/practice-feature/redux-tide.svg)](https://gitter.im/practice-feature/redux-tide?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Action
Example of RestApi class [source](https://github.com/edtoken/redux-tide/blob/master/website/src/RESTApi.js#L3)  
You can look *entity-schema.js* example from [Usage section](#usage)

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

// simple action
export const getAllPosts = createAction(
    postsSchema, 
    get, 
    `posts?_embed=comments&_order=desc` // simple static url
)

// warning, please read "Create one action for different entity id" section
export const getPostById = createAction(
    postsSchema, 
    get, 
    postId => `posts/${postId}?_embed=comments` // url with property postId
)

// warning, please read "Create one action for different entity id" section
export const delPostById = createAction(
    postsSchema, 
    del, 
    postId => `posts/${postId}` // url with property postId
)

// warning, please read "Create one action for different entity id" section
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

export const getPostById = createAction(
    postsSchema, 
    get, 
    (postId) => {
        return (dispatch, getState)=>{
            // return Promise (axios call or other)
        }
    }
)

// basic redux action can be use
export const openEditPost = (postId) => {
  return {
    type:OPEN_EDIT,
    postId
  }  
}

```

#### How to reset action store data?
When you need to force a clear state of action, please use
 
```javascript
dispatch(createNewPost.empty())
```
OR 
```javascript
dispatch(getPostById.withPrefix(props.postId).empty())
```

#### How to use one action with array of connected components ? 
Please read [Create one action for different entity id](#create-one-action-for-different-entity-id) section and [Other options to create an action](#other-options-to-create-an-action)  
And look examples:    
[different-entity-id-example](https://edtoken.github.io/redux-tide?ex=different-entity-id)  
[different-entity-id-source](https://github.com/edtoken/redux-tide/tree/master/website/src/different-entity-id)

### Create one action for different entity id
If you want to create 1 action get || post || put || delete   
for work with single entity but multiple entity ids, **for example: `GET post/:postId`**     
**You should be use action.withPrefix method** - it's generate new uniq action id and **new uniq action reducer state**  

**For details you can look example:**   
[different-entity-id-example](https://edtoken.github.io/redux-tide?ex=different-entity-id)  
[different-entity-id-source](https://github.com/edtoken/redux-tide/tree/master/website/src/different-entity-id)

*if you dont't make it - your next call* `dispatch(getPostById(nextPostId))`   
*overwrite your preview call data*  `dispatch(getPostById(prevPostId))`
  

```javascript
// actions.js
import {createAction} from 'redux-tide';
import {del, get, post, put} from '../RESTApi'
import {postsSchema} from 'entity-schema';

// write main action
export const getPostById = createAction(
    postsSchema, 
    get, 
    postId => `posts/${postId}?_embed=comments` // url with property postId
)

// component.js
import {getActionData} from 'redux-tide';
import {getPostById} from './actions';

// WRONG connect!
export default connect(
  // your selector does not have uniq post Id, so data is rewrited
  (state, props) => getActionData(getPostById),
  dispatch => {
    // your selector does not have uniq post Id, so data is rewrited
    fetch: (postId) => dispatch(getPostById(postId))
  }
)(SomeComponent)

// CORRECT connect
// you can use this connect with different postId
export default connect(
  // selector get state of getPostById but reducer key named with postId
  (state, props) => getActionData(getPostById.withPrefix(props.postId)), 
  dispatch => {
    // action call getPostById but dispatch TYPE make with prefix postId
    fetch: (postId) => dispatch(getPostById.withPrefix(postId)(postId))
  }
)(SomeComponent)

// common-component.js
import React, {Component} from 'react'
import {PostFormComponent} from './component'

export default class ComponentWrapper extends Component {
  render(){
    return(<PostFormComponent postId={this.props.postId}/>)
  }
}
```

### Selector
```javascript
import {getActionData} from 'redux-tide';
```

```
{String} actionId - your action id
{*} sourceResult - your source response from server (not mapped response)
{*} args - your args from query builder action method
{String} status - pending|success|error
{Number} time - timestamp of action
{Boolean} hasError - has error or not
{String} errorText - text of error
{Boolean} isFetching - status === 'pending'
{Object|Array} payload - denormalized response for current action
{Object|Array} prevPayload - denormalized previous response
 
```

```javascript
import {getActionData} from 'redux-tide';
import {
    createNewPost, 
    delPostById, 
    getAllPosts, 
    openEditPost
} from './actions';

export default connect(
  // single selector function for all your actions
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


### Middleware
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

## Other options to create an action

#### How to use `.withPrefix`, `.withName`, `.clone` methods?
**For details you can look example:**   
[different-entity-id-example](https://edtoken.github.io/redux-tide?ex=different-entity-id)   
[different-entity-id-source](https://github.com/edtoken/redux-tide/tree/master/website/src/different-entity-id)
  
This methods returns same action     
But generate new uniq dispatch type and new uniq action state    
You should be call `.withPrefix`, `.withName`, `.clone` when you are dispatch event and use getActionData
```javascript

dispatch(getUserAction.withPrefix(userId)(userId))
connect(
  (state)=> getActionData(getUserAction.withPrefix(userId))
)

// And this methods can chain calls
export const getUserAction = createAction(
    user, 
    get, 
    'user', 
    (resp) => {resp.data}
).withName('user')

dispatch(getUserAction.withPrefix(userId)) // action type id and state key name includes user + userId

// OR
dispatch(getUser.withName('user').withPrefix(userId))

// AND selector
getActionData(getUser.withName('user').withPrefix(userId))
```

#### Custom server response mapper
```javascript
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

#### Call dispatch or getState in query builder method
```javascript

// you can pass multi level functions or promises 
// (args) => (dispatch, getState) => (dispatch, getState) => (dispatch, getState) => ...
// calling url 'user/${userId}'

export const getUserAction = createAction(
    user, 
    get, 
    (userId) => {
        return (dispatch, getState)=>{
            // return Promise (axios call or other)
        }
    }
)
```
### Whats else?

```javascript
// actions.js 

export const get = (url) => {// returns Promise ajax call}

// simple action used custom method for getting data
export const getUserAction = createAction(user, () => {
 return new Promise((resolve, reject) => {
   // cookie|local storage|other get data
   resolve({
     //data
   })
 })
})

// if you want to best action store name in redux, 
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
    post, 
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

### Additional information, "createAction" public methods
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
// getAllPosts.empty()

```

For details, please look [source](https://github.com/edtoken/redux-tide/blob/master/src/action.js#L348)

### Contributions
Use [GitHub issues](https://github.com/edtoken/redux-tide/issues) for requests.   
I actively welcome pull requests; learn how to contribute.   

### Changelog
[CHANGELOG.md](https://github.com/edtoken/redux-tide/blob/master/CHANGELOG.md).


### License
MIT
