import {createSelector} from 'reselect'
import {getActionData} from "../../../src";
import {fetchPost, updatePost} from "./actions";

export const mergeFetchUpdatePostData = () => {
  const makeSelector = (id) => {
    return createSelector(
      [
        getActionData(fetchPost.withPrefix(id)),
        getActionData(updatePost.withPrefix(id)),
      ],
      (updateData, fetchData) => {

        updateData = updateData || {}
        fetchData = fetchData || {}

        const sortedDataByUpdateTime = [updateData, fetchData].sort(item => item.time)

        return sortedDataByUpdateTime.reduce((memo, item) => {
          return Object.assign(memo, item)
        }, {})
      }
    )
  }

  return (state, props) => {
    const selector = makeSelector(props.postId)
    return selector(state, props)
  }
}