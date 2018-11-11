import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import {addTodo} from "../../actions/todo";
import AddTodoForm from "../../components/session3/AddTodoForm/AddTodoForm";

class AddTodo extends Component {

  render() {
    return (
      <AddTodoForm {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, {addTodo})(AddTodo)
