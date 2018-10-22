import React, {Component} from 'react'
import store from '../../../store/index'

class Counter extends Component {
    render(){
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={()=>{store.dispatch({type:'INCREMENT'})}}>+</button>
                <button onClick={()=>store.dispatch({type:'DECREMENT'})}>-</button>
            </div>
        )
    }
}

export default Counter