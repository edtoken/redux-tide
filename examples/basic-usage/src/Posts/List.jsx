import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createNewPost, delPostById, getAllPosts, openEditPost, updatePostById} from './actions';
import {getActionData} from 'redux-tide';
import {Button} from 'react-bootstrap'

const updateRandomPostData = (data) => {
  data = JSON.parse(JSON.stringify(data))
  delete data.id
  data.title = `random-title ${new Date().getTime()}`
  return {...data}
}

class PostsList extends Component {

  componentWillMount() {
    this.props.getAllPosts()
  }

  render() {
    const {getAllPosts, updatePostById, createNewPost, delPostById, openEditPost} = this.props
    const {isFetching, hasError, errorText, payload} = this.props.table

    return (<div>
      <h1>Posts list</h1>
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

      <Button bsStyle="primary" bsSize="sm" onClick={() => getAllPosts()}>Reload</Button>&nbsp;
      <Button bsStyle="success" bsSize="sm" onClick={() => createNewPost(updateRandomPostData({}))}>Create random
        post</Button>

      {!isFetching && !hasError && payload && <div>
        <hr/>
        <table className={'table'}>
          <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>action</th>
          </tr>
          </thead>
          <tbody>
          {payload.map((row, num) => {
            return (<tr key={[num, row.id].join('-')}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.author}</td>
              <td>
                <Button bsStyle="danger" bsSize="xs" onClick={() => delPostById(row.id)}>Delete</Button>&nbsp;
                <Button bsStyle="primary" bsSize="xs" onClick={() => {
                  let data = updateRandomPostData(row)
                  updatePostById(row.id, data)
                }
                }>Random Update</Button>&nbsp;
                <Button bsStyle="success" bsSize="xs" onClick={() => openEditPost(row.id)}> open Edit</Button>&nbsp;
              </td>
            </tr>)
          })}
          </tbody>
        </table>
      </div>}
    </div>)
  }
}

export default connect(
  (state, props) => ({
    table: getActionData(getAllPosts)(state, props)
  }),
  (dispatch) => ({
    // redux-tide actions
    createNewPost: (data) => (dispatch(createNewPost(data))),
    delPostById: (postId) => (dispatch(delPostById.withPrefix(postId)(postId))),
    updatePostById: (postId, data) => (dispatch(updatePostById(postId, data))),
    getAllPosts: () => (dispatch(getAllPosts())),

    // simple action
    openEditPost: (postId) => (dispatch(openEditPost(postId))),
  })
)(PostsList)