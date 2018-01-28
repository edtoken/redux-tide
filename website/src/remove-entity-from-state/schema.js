import {schema} from 'normalizr'

const profileSchema = new schema.Entity('profile')
const commentsSchema = new schema.Entity('comments')
const postsSchema = new schema.Entity('posts')

postsSchema.define({
  author: profileSchema,
  comments: [commentsSchema]
})

commentsSchema.define({
  postId: postsSchema
})

export {
  profileSchema,
  commentsSchema,
  postsSchema
}

export const appSchema = {
  profileSchema,
  commentsSchema,
  postsSchema
}