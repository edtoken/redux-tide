import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {connect} from 'react-redux'

import {ConnectedRouter} from 'react-router-redux'
import {Table, Pager, ProgressBar, Modal, Button, FormControl, ControlLabel, Alert} from 'react-bootstrap'

import DevTools from '../DevTools'
import store, {history} from './store'
import {getAllPost, fetchPost, updatePost} from "./actions";
import {getActionData} from "../../../src";
import {mergeFetchUpdatePostData} from './selectors'

class BlogPostFormComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      saving: false,
      form: props.payload || {}
    }

    this._handleSubmit = this._handleSubmit.bind(this)
    this._handleChange = this._handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const props = this.props
    this.props = nextProps

    if (props.postId !== nextProps.postId) {
      this.props.fetch(this.props.postId)
    }

    //when post saved without errors - hide modal
    if (this.state.saving && this.props.status === 'success') {
      this.props.onHide()
      return
    }

    this.setState({form: this.props.payload || {}})
  }

  componentWillMount() {
    this.props.fetch(this.props.postId)
  }

  _handleChange(e) {
    const form = Object.assign({}, this.state.form, {
      [e.target.name]: e.target.value
    })
    this.setState({form})
  }

  _handleSubmit(e) {
    e.preventDefault()

    this.setState({saving: true}, () => {
      this.props.update(this.props.postId, this.state.form)
    })
  }

  render() {
    const {isFetching, hasError, errorText, payload} = this.props
    const {form} = this.state

    return (<div className="static-modal">
      <Modal show={true} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            <small><span className="label label-primary">Edit Post</span></small>
            <br/>
            {!isFetching ? form.title : ''}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Alert bsStyle="warning">
            After you are save post changes, please look into the table <br/>
            Your changes also apply to the table (without data reload), <br/>
            but you are calling only <b>PUT post/postId</b>
          </Alert>

          {isFetching && <div>
            <span className="label label-primary">Loading...</span>
          </div>}
          {!isFetching && <div>
            <ControlLabel>Post Title</ControlLabel>
            <FormControl
              type="text"
              name="title"
              defaultValue={form.title}
              placeholder="Enter text"
              onChange={(e) => (this._handleChange(e))}
            />
            <br/>
            <ControlLabel>Post Body</ControlLabel>
            <FormControl
              componentClass="textarea"
              name="body"
              defaultValue={form.body}
              placeholder="Enter text"
              onChange={(e) => (this._handleChange(e))}
            />
          </div>}

        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
          <Button bsStyle="primary" onClick={this._handleSubmit}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>)
  }
}

const BlogPostForm = connect(
  (state, props) => (mergeFetchUpdatePostData(state, props)),
  dispatch => ({
    fetch: (postId) => (dispatch(fetchPost.withPrefix(postId)(postId))),
    update: (postId, data) => (dispatch(updatePost.withPrefix(postId)(postId, data))),
  })
)(BlogPostFormComponent)

class BlogPostsTableComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query: {
        _page: 1,
        _limit: 5
      }
    }
  }

  componentWillMount() {
    this._fetch()
  }

  _fetch(query = {}) {
    const q = Object.assign({}, this.state.query, query)

    this.setState({query: q}, () => {
      this.props.fetch(this.state.query)
    })
  }

  render() {
    const {isFetching, hasError, errorText, payload} = this.props
    const {activePostId} = this.state

    const hasPayload = (payload && payload.length)
    const progress = isFetching ? 20 : hasError ? 90 : 100

    return (<div>
      <h3>BlogPostsTable</h3>

      <button
        className="btn btn-xs btn-primary"
        onClick={() => this._fetch()}>
        manual reload table
      </button>

      {hasError && <div>
        {errorText}
      </div>}

      {isFetching && <div>
        <br/>
        <ProgressBar striped bsStyle="success" now={progress}/>
      </div>}

      <div>
        <hr/>

        <ul>
          <li>page: {this.state.query._page} </li>
          <li>limit: {this.state.query._limit} </li>
        </ul>

        <Alert bsStyle="warning">
          Please, click on row in the table
        </Alert>

        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
          </tr>
          </thead>
          <tbody>
          {hasPayload && payload.map((item, num) => {
            return <tr
              key={['table-post', item.id, num].join('-')}
              onClick={() => this.props.handleOpenPost(item.id)}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          })}
          </tbody>
        </Table>
        <Pager>
          <Pager.Item
            href="#"
            onClick={() => {
              if (hasPayload) {
                this._fetch({_page: this.state.query._page - 1})
              }
            }}>
            Previous
          </Pager.Item>
          &nbsp;
          <Pager.Item
            href="#"
            onClick={() => {
              if (hasPayload) {
                this._fetch({_page: this.state.query._page + 1})
              }
            }}>
            Next
          </Pager.Item>
        </Pager>
      </div>
    </div>)
  }
}

const BlogPostsTable = connect(
  state => (getActionData(getAllPost)(state)),
  dispatch => ({
    fetch: (query) => (dispatch(getAllPost(query)))
  })
)(BlogPostsTableComponent)

class BlogExampleComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activePostId: undefined,
    }

    this.handleOpenPost = this.handleOpenPost.bind(this)
    this.handleClosePost = this.handleClosePost.bind(this)
  }

  handleOpenPost(activePostId) {
    this.setState({activePostId})
  }

  handleClosePost() {
    this.setState({activePostId: undefined})
  }

  render() {
    const {activePostId} = this.state

    return (<div>
      <h1>BlogExampleComponent</h1>

      <Alert bsStyle="info">
        Demonstrate how to create list and single item requests, sync data between it, witout reducers
        <br/>
        Please look into the <b>DevTools panel</b> and <b>Network requests</b>
        <br/>
        <br/> You can hide <b>DevTools</b>, click <b>Ctrl+H</b>
      </Alert>

      <BlogPostsTable
        handleOpenPost={this.handleOpenPost}
        handleClosePost={this.handleClosePost}/>

      {activePostId && <div>
        <BlogPostForm
          show={activePostId}
          postId={activePostId}
          onHide={() => this.handleClosePost()}/>
      </div>}

    </div>)
  }
}

export default class BlogExampleComponentWrapper extends Component {

  render() {
    return (<div>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <DevTools/>
            <BlogExampleComponent/>
          </div>
        </ConnectedRouter>
      </Provider>
    </div>)
  }
}