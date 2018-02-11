import React, {Component} from 'react'
import {connect, Provider} from 'react-redux'

import {ConnectedRouter} from 'react-router-redux'
import {Alert} from 'react-bootstrap'

import DevTools from '../DevTools'
import store, {history} from './store'
import {deletePost, fetchPost, updatePost} from "./actions"
import {getMergedActionsData} from 'redux-tide'

class CommonPostComponent extends Component {

  componentWillMount() {
    this.props.fetch(this.props.postId)
  }

  componentWillReceiveProps(nextProps) {
    const prevProps = this.props
    this.props = nextProps

    if (this.props.postId && this.props.postId !== prevProps.postId) {
      this.props.fetch(this.props.postId)
    }
  }

  render() {
    const {postId, payload, isFetching, hasError, errorText} = this.props

    return (<div>
      POST ID (props) <b>{postId}</b>&nbsp; <br/>
      <small>post id payload <b>{payload ? payload.id : ''}</b></small>
      <br/>
      <br/>

      {isFetching && <div><span className="label label-info">isFetching...</span><br/></div>}


      <button
        onClick={() => this.props.fetch(postId)}
        className="btn btn-xs btn-primary">
        Fetch
      </button>
      &nbsp;
      <button
        onClick={() => this.props.update(postId, {title: ['title', Math.random().toFixed(3)].join('-')})}
        className="btn btn-xs btn-success">
        Update
      </button>
      &nbsp;
      <button
        onClick={() => this.props.del(postId)}
        className="btn btn-xs btn-danger">
        Delete
      </button>
      <br/>
      <br/>
      {hasError && <div className="alert alert-danger">{errorText}</div>}
      <pre>{JSON.stringify({
        title: payload ? payload.get('title') : ''
      }, null, 2)}</pre>
    </div>)
  }
}

const CommonPost = connect(
  (state, props) => getMergedActionsData(
    fetchPost.withPrefix(props.postId),
    updatePost.withPrefix(props.postId),
    deletePost.withPrefix(props.postId)
  ),
  (dispatch) => ({
    del: postId => dispatch(deletePost.withPrefix(postId)(postId)),
    fetch: postId => dispatch(fetchPost.withPrefix(postId)(postId)),
    update: (postId, data) => dispatch(updatePost.withPrefix(postId)(postId, data))
  })
)(CommonPostComponent)

class DeleteTntityFromStateExampleComponent extends Component {

  render() {

    return (<div>
      <h1>Remove Entity from state</h1>

      <p>
        Preview in SandBox&nbsp;<a
        href='https://codesandbox.io/s/github/edtoken/redux-tide/tree/master/website?module=/src/delete-entity-from-state/index.js&moduleview=1'
        target='_blank'>codesandbox.io</a>
      </p>

      <p>Source code <a
        href="https://github.com/edtoken/redux-tide/tree/master/website/src/delete-entity-from-state"
        target='_blank'>source</a>
      </p>

      <Alert bsStyle="info">
        Demonstrate how to use `dispatch(action.remove())` method<br/>
        When you do `DELETE users/:user_id`, you need to delete entity from normalized store <br/>
        For this, you can use `dispatch(deleteUserAction.remove())` or `dispatch(deleteUserAction.withPrefix(userId).remove())`
      </Alert>

      <div className="row">
        <div className="col-md-6">
          <h1>With delete <small className='text-success'>It's correct</small></h1>
          <CommonPost postId={1}/>
        </div>
        <div className="col-md-6">
          <h1>Without delete <small className='text-danger'>It's no correct</small></h1>
          <CommonPost postId={1}/>
        </div>
      </div>
    </div>)
  }
}

export default class MergedActionsDataComponentWrapper extends Component {

  render() {
    return (<div>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <DevTools/>
            <DeleteTntityFromStateExampleComponent/>
          </div>
        </ConnectedRouter>
      </Provider>
    </div>)
  }
}