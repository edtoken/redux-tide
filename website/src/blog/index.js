import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {connect} from 'react-redux'

import {ConnectedRouter} from 'react-router-redux'
import {Table, Pager, Modal, Button, FormControl, ControlLabel, Alert} from 'react-bootstrap'
import {Spinner} from "../Spinner";

import DevTools from '../DevTools'
import store, {history} from './store'
import {getAllPost, fetchPost, updatePost} from "./actions";
import {getActionData} from "../../../src";

class BlogPostFormComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      saved: false,
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
    // if (this.state.saved && this.props.status === 'success') {
    //   this.props.onHide()
    //   return
    // }

    this.setState({form: this.props.payload || {}})
  }

  componentWillMount() {
    this.props.fetch(this.props.postId)
  }

  _handleChange(e) {
    const form = Object.assign({}, this.state.form, {
      [e.target.name]: e.target.value
    })
    this.setState({saved: false, form})
  }

  _handleSubmit(e) {
    e.preventDefault()

    this.setState({saved: true}, () => {
      this.props.update(this.props.postId, this.state.form)
    })
  }

  render() {
    const {isFetching, hasError, errorText, payload} = this.props
    const {saved, form} = this.state
    const disableEdit = isFetching
    const completed = saved && this.props.status === 'success'

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
              <b>Your modal component connected only to fetchPost</b> <br/>
              After you are save post changes, <br/>
              please look into the <b>Table</b> and modal section <b>Payload</b> <br/>
              <br/>
              Your changes also apply to the <b>table</b> and <b>selector fetchPost response</b> (without data
              reload), <br/>
              But you are calling only <b>PUT post/postId</b>
            </Alert>

            <h3>fetchPost payload:</h3>
            <pre><code>{JSON.stringify(payload, null, 2)}</code></pre>

            {isFetching && <div>
              <Spinner/>
            </div>}
            {!isFetching && <div>
              <ControlLabel>Post Title</ControlLabel>
              <FormControl
                type="text"
                name="title"
                defaultValue={form.title}
                placeholder="Enter text"
                onChange={(e) => (this._handleChange(e))}
                disabled={disableEdit}
              />
              <br/>
              <ControlLabel>Post Body</ControlLabel>
              <FormControl
                componentClass="textarea"
                name="body"
                defaultValue={form.body}
                placeholder="Enter text"
                onChange={(e) => (this._handleChange(e))}
                disabled={disableEdit}
              />
            </div>}

          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            <Button bsStyle={completed ? 'primary' : 'success'} onClick={this._handleSubmit} disabled={completed}>
              {completed && 'Saved'}
              {!completed && 'Save changes'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const BlogPostForm = connect(
  state => getActionData(fetchPost),
  dispatch => ({
    fetch: (postId) => (dispatch(fetchPost(postId))),
    update: (postId, data) => (dispatch(updatePost(postId, data))),
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
    const hasPayload = (payload && payload.length)

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
            <th>actions</th>
          </tr>
          </thead>
          <tbody>

          {isFetching && <tr>
            <td colSpan={4}>
              <br/>
              <Spinner/>
            </td>
          </tr>}

          {hasPayload && payload.map((item, num) => {
            return <tr
              key={['table-post', item.id, num].join('-')}
              onClick={() => this.props.handleOpenPost(item.id)}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>

              </td>
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
    fetch: (query) => (dispatch(getAllPost(query))),
    update: (postId, data) => (dispatch(updatePost(postId, data))),
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
      <h1>Blog Example</h1>
      <p>Source code <a href="https://github.com/edtoken/redux-tide/tree/master/website/src/blog"
                        target='_blank'>source</a></p>

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