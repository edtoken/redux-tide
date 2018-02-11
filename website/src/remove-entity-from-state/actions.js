import {createAction} from 'redux-tide'
import * as api from '../RESTApi'
import {postsSchema} from "./schema"


/**
 * Ajax axios call get post by Id
 *
 * @property {Number} postId - post id
 *
 * @type {Action}
 */
export const fetchPost = createAction(
  postsSchema,
  api.get,
  postId => `posts/${postId}?_embed=comments`
)

export const updatePost = createAction(
  postsSchema,
  api.put,
  (postId, data) => [
    `posts/${postId}?_embed=comments`,
    undefined,
    data
  ]
)


export const deletePost = createAction(
  postsSchema,
  api.del,
  postId => `posts/${postId}`
)