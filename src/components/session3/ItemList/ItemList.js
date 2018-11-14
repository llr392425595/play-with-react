import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  active: {

  },
  inactive: {
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  }
});

class ItemList extends React.Component {

  onTodoClick = (id) => {
    this.props.toggleTodo(id)
  };

  render() {
    const {classes, todos, filterMethod} = this.props;

    const displayTodos = todos.filter(filterMethod);

    const todoList = displayTodos.map(todo => (
      <ListItem key={todo.id} button className={todo.completed ? classes.inactive : classes.active}>
        <ListItemText primary={todo.title}/>
        <ListItemSecondaryAction>
          <Checkbox
            onChange={() => this.onTodoClick(todo.id)}
            checked={todo.completed}
          />
        </ListItemSecondaryAction>
      </ListItem>
    ));


    return (
      <div className={classes.root}>
        <List>
          {todoList}
        </List>
      </div>
    );
  }
}

ItemList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemList);
