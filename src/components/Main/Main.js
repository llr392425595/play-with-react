import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from '../Home/Home'
import Clock from '../Clock/Clock'
import Switch from '../Switch/Switch'
import LoginControl from '../LoginControl/LoginControl'
import MailBox from '../MailBox/MailBox'
import Form from '../Form/Form'

class Main extends Component {
    render(){
        return (
            <Router>
                <div>
                    <div className="header">
                        <div><Link to={`/`}>Home组件</Link></div>
                        <div><Link to={`/clock`}>Clock组件</Link></div>
                        <div><Link to={`/switch`}>开关组件</Link></div>
                        <div><Link to={`/loginControl`}>条件渲染——LoginControl组件</Link></div>
                        <div><Link to={`/mailBox`}>条件渲染——mailBox组件</Link></div>
                        <div><Link to={`/form`}>Form——受控组件</Link></div>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/clock" component={Clock}/>
                        <Route path="/switch" component={Switch}/>
                        <Route path="/loginControl" component={LoginControl}/>
                        <Route path="/mailBox" render={() => <MailBox unreadMessages={['1','2','3']}/>}/>
                        <Route path="/form" component={Form}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main