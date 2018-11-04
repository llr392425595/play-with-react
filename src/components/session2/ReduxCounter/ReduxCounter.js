import React, {Component} from 'react'
import store from '../../../store/index'
import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={() => {
          store.dispatch({type: 'INCREMENT'})
        }}>+
        </button>
        <button onClick={() => store.dispatch({type: 'DECREMENT'})}>-</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});
export default connect(mapStateToProps)(Counter)
