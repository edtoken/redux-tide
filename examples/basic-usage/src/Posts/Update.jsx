import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getActionData} from 'redux-tide';
import {createSelector} from 'reselect'

import {createNewPost, getPostById, openEditPost, updatePostById} from './actions'


class UpdateComponent extends Component {

  componentWillMount() {
    if (this.props.postId) {
      this.props.fetch(this.props.postId)
    }
  }

  componentWillReceiveProps(nextProps) {
    const props = this.props
    this.props = nextProps
    if (this.props.postId && this.props.postId !== props.postId) {
      this.props.fetch(this.props.postId)
    }
  }

  render() {
    const {postId, closeEdit, fetch, update, create} = this.props

    const isCreate = !Boolean(postId)
    const {isFetching, hasError, errorText, payload} = this.props

    return (<div>
      {isCreate ? <h2>Create new Post</h2> : <h2>Update Post by ID - {postId}</h2>}
      {!isCreate && <div>
        <button onClick={() => fetch(postId)} className="btn btn-xs btn-primary">Fetch post</button>
      </div>}


      <ul>
        <li>
          isFetching: {isFetching ? <span className='label label-primary'>YES</span> :
          <span className='label label-success'>NO</span>}
        </li>
        <li>
          hasError: {hasError ? <span className='label label-primary'>YES</span> :
          <span className='label label-success'>NO</span>}
        </li>
        {hasError && <li>
          errorText: <span>{errorText}</span>
        </li>}

      </ul>

      <form style={{width: '300px'}} className='form' onSubmit={(e) => {
        e.preventDefault()
        isCreate ? create({title: this.titleInput.value}) : update(postId, {title: this.titleInput.value})
      }}>
        <div>
          <input
            ref={(node) => this.titleInput = node}
            className="form-control"
            placeholder='Title'
            defaultValue={payload ? payload.title : ''}
            data-f={payload ? `${payload.title}-${payload.id}` : 'create'}
            key={payload ? `${payload.title}-${payload.id}` : 'create'}/>
        </div>
        <footer>
          <hr/>
          <button
            className="btn btn-xs btn-success">{isCreate ? 'Create new post ' : `Update post - ${postId}`}</button>
          &nbsp;

          {!isCreate && <button onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            closeEdit()
          }} className='btn btn-xs btn-danger'>Cancel edit</button>}
        </footer>
      </form>

      <h2>Payload</h2>
      <div style={{width: '300px'}}>
        <pre>{JSON.stringify(payload, null, 2)}</pre>
      </div>
    </div>)
  }
}


// MERGE SELECTOR for update and get data
const makeGetPostUpdateDataSelector = () => {

  const makeGetMergedActionData = (id) => {
    return createSelector(
      [
        getActionData(updatePostById.withPrefix(id)),
        getActionData(getPostById.withPrefix(id)),
      ],
      (updateData, fetchData) => {

        updateData = updateData || {}
        fetchData = fetchData || {}

        const sortedDataByUpdateTime = [updateData, fetchData].sort(item => item.time).reverse()

        return sortedDataByUpdateTime.reduce((memo, item) => {
          return Object.assign(memo, item)
        }, {})
      }
    )
  }

  return (state, props) => {
    const selector = makeGetMergedActionData(props.postId)
    return selector(state, props)
  }
}

export const Update = connect(
  (state, props) => (makeGetPostUpdateDataSelector()),
  (dispatch) => ({
    closeEdit: () => (dispatch(openEditPost())),
    update: (postId, data) => (dispatch(updatePostById.withPrefix(postId)(postId, data))),
    fetch: (postId) => (dispatch(getPostById.withPrefix(postId)(postId)))
  })
)(UpdateComponent)

export const Create = connect(
  undefined,
  (dispatch) => ({
    create: (data) => (dispatch(createNewPost(data)))
  })
)(UpdateComponent)


class UpdatePostWrapperComponent extends Component {

  render() {
    const {editablePost} = this.props
    return (<div>
      {editablePost ? <Update postId={editablePost}/> : <Create/>}
    </div>)
  }
}

export default connect(
  (state) => ({
    editablePost: state.ui.editablePost
  }),
  (dispatch) => ({})
)(UpdatePostWrapperComponent)