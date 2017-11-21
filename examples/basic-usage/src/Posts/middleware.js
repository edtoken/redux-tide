import {createNewPost, delPostById, getAllPosts, openEditPost} from './actions';

export const postsMiddleware = store => next => action => {

  const result = next(action)

  const createNewPostActionId = createNewPost.actionId()
  const delPostByIdParentActionId = delPostById.actionId() // delete post using with prefix, so need check parentActionId

  switch (action.actionId) {
    case createNewPostActionId:
      if (action.status === 'success') {
        store.dispatch(openEditPost(action.payload))
        store.dispatch(getAllPosts())
      }
      break
  }

  switch (action.parentActionId) {
    case delPostByIdParentActionId:
      if (action.status === 'success') {
        store.dispatch(getAllPosts())
      }
      break
  }
  return result
}
