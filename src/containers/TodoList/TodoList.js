import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import ItemList from "../../components/session3/ItemList/ItemList";

class TodoList extends Component {

  render() {
    return (
      <ItemList {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList)
