import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Session1 from '../../components/Main/Session1'
import Session2 from '../../components/Main/Session2'
import Session3 from '../../components/Main/Session3'
import SessionList from '../../components/SessionList/SessionList'

import '../../assets/global.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={SessionList}/>
          <Route path="/session1/" component={Session1}/>
          <Route path="/session2" component={Session2}/>
          <Route path="/session3" component={Session3}/>
        </div>
      </Router>
    );
  }
}

export default App;
