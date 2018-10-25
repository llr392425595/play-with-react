import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Home from '../session2/Home/Home'
import Post from '../session2/Post/Post'

class Session2 extends Component {
    render(){
        return (
            <div className="content">
                <Route exact path="/session2/" component={Home}/>
                <Route path="/session2/post/:id" component={Post} />
            </div>
        )
    }
}

export default Session2