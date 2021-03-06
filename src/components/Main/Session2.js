import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Home from '../session2/Home/Home'
import Post from '../session2/Post/Post'
import DefaultCounter from '../session2/DefaultCounter/DefaultCounter'
import ReduxCounter from '../session2/ReduxCounter/ReduxCounter'

class Session2 extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div><Link to={`/session2/default-counter`}>Default Counter</Link></div>
          <div><Link to={`/session2/redux-counter`}>Redux Counter</Link></div>
          <div><Link to={`/session2/home`}>Post-Detail-Comment案例</Link></div>
        </div>
        <div className="content">
          <Route exact path="/session2/default-counter" component={DefaultCounter}/>
          <Route exact path="/session2/redux-counter" component={ReduxCounter}/>
          <Route exact path="/session2/home" component={Home}/>
          <Route path="/session2/post/:id" component={Post}/>
        </div>
      </div>
    )
  }
}

export default Session2
