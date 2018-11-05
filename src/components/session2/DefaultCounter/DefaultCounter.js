import React, {Component} from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  //这里采用了调用setState方法的两种方式，注意差别
  handleIncrement() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  handleDecrement = () => {
    this.setState(preState => ({
      counter: preState.counter -1
    }))
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-
        </button>
      </div>
    )
  }
}


export default Counter
