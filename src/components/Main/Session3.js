import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import TodoList from '../session3/TodoApp/TodoApp'

class Session2 extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <Route path="/session3" component={TodoList}/>
        </div>
      </div>
    )
  }
}

export default Session2
