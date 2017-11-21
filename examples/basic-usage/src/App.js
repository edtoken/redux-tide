import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import PostsList from './Posts/List'
import UpdatePostWrapper from './Posts/Update'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div style={{textAlign: 'left', maxWidth: '800px', margin: '0 auto'}}>
          <UpdatePostWrapper/>
          <hr/>
          <PostsList/>
        </div>
      </div>
    );
  }
}

export default App;
