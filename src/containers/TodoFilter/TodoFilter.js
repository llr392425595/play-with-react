import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import {changeFilterMethod} from "../../actions/todo";
import ItemFilter from "../../components/session3/ItemFilter/ItemFilter";

class TodoFilter extends Component {

  render() {
    return (
      <ItemFilter {...this.props}/>
    );
  }
}


const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, {changeFilterMethod})(TodoFilter)
