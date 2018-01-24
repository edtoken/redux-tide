import React, {Component} from 'react'
import {connect, Provider} from 'react-redux'

import {ConnectedRouter} from 'react-router-redux'
import {Alert} from 'react-bootstrap'

import DevTools from '../DevTools'
import store, {history} from './store'
import {fetchPost, fetchSinglePost, updatePost, updateSinglePost} from "./actions"
import {getActionData, getMergedActionsData} from "../../../src"

class CommonPostComponent extends Component {

  componentWillMount() {
    console.log('fetch', this.props.postId)
    this.props.fetch(this.props.postId)
  }

  render() {
    const {postId, payload, isFetching, hasError, errorText} = this.props

    return (<div>
      POST ID (props) <b>{postId}</b>&nbsp; <br/>
      <small>post id payload <b>{payload ? payload.id : ''}</b></small>
      <br/>
      <br/>

      {isFetching && <div><span className="label label-info">isFetching...</span><br/><br/></div>}

      <button
        onClick={() => this.props.fetch(postId)}
        className="btn btn-xs btn-primary">
        fetch
      </button>
      &nbsp;
      <button
        onClick={() => this.props.update(postId, {title: ['title', Math.random().toFixed(3)].join('-')})}
        className="btn btn-xs btn-success">
        random update
      </button>
      <br/>
      <br/>
      {hasError && <div className="alert alert-danger">{errorText}</div>}
      <pre>{JSON.stringify(payload, null, 2)}</pre>
    </div>)
  }
}

// it's correct connect for multiple component
const PostMergedComponent = connect(
  (state, props) => getMergedActionsData(
    fetchPost.withPrefix(props.postId),
    updatePost.withPrefix(props.postId)
  ),
  dispatch => ({
    fetch: (postId) => dispatch(fetchPost.withPrefix(postId)(postId)),
    update: (postId, data) => dispatch(updatePost.withPrefix(postId)(postId, data))
  })
)(CommonPostComponent)

// it's incorrect connect for multiple component
const PostNotMergedComponent = connect(
  state => getActionData(fetchPost),
  dispatch => ({
    fetch: (postId) => dispatch(fetchPost(postId)),
    update: (postId, data) => dispatch(updatePost(postId, data))
  })
)(CommonPostComponent)

class PostsWrapperComponent extends Component {
  render() {
    const {isCorrect} = this.props
    const postIds = [1, 2]

    return (<div>
      <div className="container-fluid">
        <div className="row">
          {postIds.map(id => isCorrect
            ? <PostMergedComponent key={['prefix-post', id].join('-')} postId={id}/>
            : <PostNotMergedComponent key={['prefix-post', id].join('-')} postId={id}/>
          )}
        </div>
      </div>
    </div>)
  }
}

class DifferentEntityIdExampleComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {postId: 1}
  }

  render() {

    return (<div>
      <h1>Merged Actions Data</h1>
      <p>Source code <a
        href="https://github.com/edtoken/redux-tide/tree/master/website/src/merged-actions-data"
                        target='_blank'>source</a></p>

      <Alert bsStyle="info">
        Demonstrate how to use `getMergedActionsData` selector<br/>
        Please click <b>fetch</b> and <b>update</b> on every post and look where label "is fetching" will appear <br/>
        In merged posts label "is fetching" always appears (GET and PUT requests) <br/>
        In NOT merged posts label "is fetching" appears only GET request <br/>

        <span className="text text-warning"><b>But data are relevant everywhere</b></span>
      </Alert>

      <div className="row">
        <div className="col-md-6">
          <h1>Merged</h1>
          <PostsWrapperComponent isCorrect/>
        </div>
        <div className="col-md-6">
          <h1>Not merged</h1>
          <PostsWrapperComponent/>
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
            <DifferentEntityIdExampleComponent/>
          </div>
        </ConnectedRouter>
      </Provider>
    </div>)
  }
}