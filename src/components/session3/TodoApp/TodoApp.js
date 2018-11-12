import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import AddItem from "../../../containers/AddTodo/AddTodo";
import ItemFilter from "../ItemFilter/ItemFilter";

import {withStyles} from '@material-ui/core/styles';
import WithMui from '../utils/WithMui';
import TodoList from "../../../containers/TodoList/TodoList";

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 500,
  },
  card: {
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
};

class TodoApp extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <AddItem/>
          <TodoList/>
          <ItemFilter/>
        </Card>
      </div>
    )

  }
}

export default WithMui(withStyles(styles)(TodoApp))
