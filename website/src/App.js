import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import './App.css';

const README = require('../../README.md')

const exampleName = document.location.search.replace('?ex=', '')
const exampleComponents = {
  'blog': require('./blog'),
  'different-entity-id': require('./different-entity-id'),
  'merged-actions-data': require('./merged-actions-data')
}

class App extends Component {

  render() {
    const ExampleComponent = exampleName && exampleComponents[exampleName] ? exampleComponents[exampleName].default : undefined

    return (
      <div className="App">
        <header className="App-header" style={{height: 'auto'}}>
          <a href={`${process.env.PUBLIC_URL}/redux-tide/`}>
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
          <h1 className="App-title">Welcome to Redux Tide examples</h1>


          <a
            className="github-button"
            href={`${process.env.PUBLIC_URL}`}
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star edtoken/redux-tide on GitHub">Star</a>

          <br/>

          <a
            className="github-button"
            href="https://github.com/edtoken"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @edtoken on GitHub">Follow @edtoken</a>

        </header>
        <div className="App-intro">
          <div>
            <Navbar>
              <Nav>
                <NavItem href={`${process.env.PUBLIC_URL}/redux-tide/`}>
                  Index
                </NavItem>
                <NavItem href={`${process.env.PUBLIC_URL}/redux-tide?ex=blog`}>
                  Blog example
                </NavItem>
                <NavItem href={`${process.env.PUBLIC_URL}/redux-tide?ex=different-entity-id`}>
                  Different entity id
                </NavItem>
                <NavItem href={`${process.env.PUBLIC_URL}/redux-tide?ex=merged-actions-data`}>
                  Merged actions data
                </NavItem>
              </Nav>
            </Navbar>
          </div>
        </div>
        {!ExampleComponent && <div>
          <div style={{
            textAlign: 'left',
            maxWidth: '800px',
            margin: '30px auto',
            padding: '30px',
            border: '1px solid #ddd'
          }} dangerouslySetInnerHTML={{__html: README}}/>
        </div>}

        {ExampleComponent &&
        <div style={{
          textAlign: 'left',
          maxWidth: '800px',
          margin: '30px auto',
          padding: '30px',
          border: '1px solid #ddd'
        }}>
          <ExampleComponent/>
        </div>}
      </div>
    );
  }
}

export default App;
