import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Home from '../session1/Home/Home'
import Clock from '../session1/Clock/Clock'
import Switch from '../session1/Switch/Switch'
import LoginControl from '../session1/LoginControl/LoginControl'
import MailBox from '../session1/MailBox/MailBox'
import Form from '../session1/Form/Form'
import Counter from '../session1/Counter/Counter'

class Session1 extends Component {
    render(){
        return (
            <div>
                <div className="header">
                    <div><Link to={`/session1/`}>Home组件</Link></div>
                    <div><Link to={`/session1/clock`}>Clock组件</Link></div>
                    <div><Link to={`/session1/switch`}>开关组件</Link></div>
                    <div><Link to={`/session1/loginControl`}>条件渲染——LoginControl组件</Link></div>
                    <div><Link to={`/session1/mailBox`}>条件渲染——mailBox组件</Link></div>
                    <div><Link to={`/session1/form`}>Form——受控组件</Link></div>
                    <div><Link to={`/session1/counter`}>Counter</Link></div>
                </div>
                <div className="content">
                    <Route exact path="/session1/" component={Home}/>
                    <Route path="/session1/clock" component={Clock}/>
                    <Route path="/session1/switch" component={Switch}/>
                    <Route path="/session1/loginControl" component={LoginControl}/>
                    <Route path="/session1/mailBox" render={() => <MailBox unreadMessages={['1','2','3']}/>}/>
                    <Route path="/session1/form" component={Form}/>
                    <Route path="/session1/counter" component={Counter}/>
                </div>
            </div>
        )
    }
}

export default Session1