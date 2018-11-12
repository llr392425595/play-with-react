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
});

class ItemList extends React.Component {
  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const {checked} = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const {classes,todos} = this.props;

    const todoList = todos.map(todo => (
      <ListItem key={todo.id} button>
        <ListItemText primary={todo.title}/>
        <ListItemSecondaryAction>
          <Checkbox
            onChange={this.handleToggle(todo.completed)}
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
