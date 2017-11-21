import {createAction} from 'redux-tide';
import {del, get, post, put} from '../RESTApi'
import {postsSchema} from '../schema';
import {OPEN_EDIT} from './types'

export const getAllPosts = createAction(postsSchema, get, `posts?_embed=comments&_order=asc`)

export const getPostById = createAction(postsSchema, get, postId => `posts/${postId}?_embed=comments`)
export const delPostById = createAction(postsSchema, del, postId => `posts/${postId}`)

export const updatePostById = createAction(postsSchema, put, (postId, data) => [
  `posts/${postId}`,
  undefined,
  data
])

export const createNewPost = createAction(postsSchema, post, data => [
  `posts`,
  undefined,
  data
])

export const openEditPost = (postId) => {
  return {
    type:OPEN_EDIT,
    postId
  }
}