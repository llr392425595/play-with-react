import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from '../Home/Home'
import Clock from '../Clock/Clock'
import Switch from '../Switch/Switch'

class Main extends Component {
    render(){
        return (
            <Router>
                <div>
                    <div className="header">
                        <Link to={`/`}>Home组件</Link>|
                        <Link to={`/clock`}>Clock组件</Link>|
                        <Link to={`/switch`}>开关组件</Link>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/clock" component={Clock}/>
                        <Route path="/switch" component={Switch}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main