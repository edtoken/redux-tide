import React, {Component} from 'react'
import logo from './logo.svg'
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import './App.css'

const README = require('../../README.md')

const exampleName = document.location.search.replace('?ex=', '')
const PUBLIC_URL = (document && document.location && document.location.host === 'localhost:3000') ?  process.env.PUBLIC_URL || '/' : 'https://edtoken.github.io/redux-tide'

const EXAMPLES = [
  {
    'title': 'Blog example',
    'path': 'blog',
    'component': require('./blog')
  },
  {
    'title': 'Different entity id',
    'path': 'different-entity-id',
    'component': require('./different-entity-id')
  },
  {
    'title': 'Merged actions data',
    'path': 'merged-actions-data',
    'component': require('./merged-actions-data')
  },
  {
    'title': 'Remove entity from state',
    'path': 'remove-entity-from-state',
    'component': require('./remove-entity-from-state')
  }
]

class App extends Component {

  render() {
    const ExampleComponent = exampleName ? EXAMPLES.find(item => item.path === exampleName).component.default : undefined

    return (
      <div className="App">
        <header className="App-header" style={{height: 'auto'}}>
          <a href={`${PUBLIC_URL}`}>
            <img src={logo} className="App-logo" alt="logo"/>
          </a>
          <h1 className="App-title">Welcome to Redux Tide examples</h1>


          <a
            className="github-button"
            href="https://github.com/edtoken/redux-tide"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star @edtoken/redux-tide on GitHub">Star</a>

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
                <NavItem href={`${PUBLIC_URL}`}>
                  Index
                </NavItem>
                {EXAMPLES.map((item, num) => {
                  return <NavItem key={['example', 'nav', num, item.path].join('-')}
                                  href={`${PUBLIC_URL}?ex=${item.path}`}>
                    {item.title}
                  </NavItem>
                })}
              </Nav>
            </Navbar>
          </div>
        </div>
        {!ExampleComponent && <div>
          <div style={{
            textAlign: 'left',
            maxWidth: '980px',
            margin: '30px auto',
            padding: '30px',
            border: '1px solid #ddd'
          }} dangerouslySetInnerHTML={{__html: README}}/>
        </div>}

        {ExampleComponent &&
        <div style={{
          textAlign: 'left',
          maxWidth: '980px',
          margin: '30px auto 30px 30px',
          padding: '30px',
          border: '1px solid #ddd'
        }}>
          <ExampleComponent/>
        </div>}
      </div>
    )
  }
}

export default App
