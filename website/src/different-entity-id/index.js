import React, {Component} from 'react'
import {connect, Provider} from 'react-redux'

import {ConnectedRouter} from 'react-router-redux'
import {Alert} from 'react-bootstrap'

import DevTools from '../DevTools'
import store, {history} from './store'
import {fetchPost, fetchSinglePost, updatePost, updateSinglePost} from "./actions"
import {getActionData} from 'redux-tide'

class CommonPostComponent extends Component {

  componentWillMount() {
    this.props.fetch(this.props.postId)
  }

  componentWillReceiveProps(nextProps) {
    // it's need only for SinglePostCorrectComponent
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
const PostCorrectComponent = connect(
  (state, props) => getActionData(fetchPost.withPrefix(props.postId)),
  dispatch => ({
    fetch: postId => dispatch(fetchPost.withPrefix(postId)(postId)),
    update: (postId, data) => dispatch(updatePost.withPrefix(postId)(postId, data)),
  })
)(CommonPostComponent)

// it's incorrect connect for multiple component
const PostIncorrectComponent = connect(
  state => getActionData(fetchPost),
  dispatch => ({
    fetch: (postId) => dispatch(fetchPost(postId)),
    update: (postId, data) => dispatch(updatePost(postId, data))
  })
)(CommonPostComponent)

const SinglePostCorrectComponent = connect(
  state => getActionData(fetchSinglePost),
  dispatch => ({
    fetch: postId => dispatch(fetchSinglePost(postId)),
    update: (postId, data) => dispatch(updateSinglePost(postId, data))
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
            ? <PostCorrectComponent key={['prefix-post', id].join('-')} postId={id}/>
            : <PostIncorrectComponent key={['prefix-post', id].join('-')} postId={id}/>
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
      <h1>Different entity Id</h1>
      <p>Source code <a href="https://github.com/edtoken/redux-tide/tree/master/website/src/different-entity-id"
                        target='_blank'>source</a></p>

      <Alert bsStyle="info">
        Demonstrate how to use `.withPrefix`, `.withName`, `.clone` methods <br/>
        If you are have 1 action to many components you should be use this methods <br/>

        Please click <b>fetch</b> on every post and look where label "is fetching" will appear <br/>
        Then, please click <b>Incorrect fetch 1->2->1</b> and look <b>post id payload</b>, payload be rewrited
      </Alert>

      <div className="row">
        <div className="col-md-6">
          <h1>Correct (withPrefix)</h1>
          <PostsWrapperComponent isCorrect/>
        </div>
        <div className="col-md-6">
          <h1>Incorrect</h1>
          <PostsWrapperComponent/>
        </div>
      </div>

      <hr/>
      <div className="row">
        <div className="col-sm-8 col-sm-push-2">
          <Alert bsStyle="info">
            If you are have 1 component to 1 action <br/>
            you can use without <span className="label label-info">withPrefix</span> method, it's not required <br/>
            <b>Please change postId from input to <span className='label label-info'>2</span>, <br/>Then click update
              and look <span className='label label-info'>correct-post-2</span></b>
          </Alert>

          <input
            type="text"
            className='form-control'
            placeholder="postId"
            value={this.state.postId}
            onChange={(e) => this.setState({postId: e.target.value})}/>
          <br/>
          <SinglePostCorrectComponent postId={this.state.postId}/>
        </div>
      </div>
    </div>)
  }
}

export default class DifferentEntityIdComponentWrapper extends Component {

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