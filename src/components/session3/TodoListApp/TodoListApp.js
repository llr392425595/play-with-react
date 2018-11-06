import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import AddItem from "./AddItem/AddItem";
import ItemList from "./ItemList/ItemList";
import ItemFilter from "./ItemFilter/ItemFilter";

import {withStyles} from '@material-ui/core/styles';
import WithMui from '../utils/WithMui';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 800,
  },
  card: {
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
};

class TodoListApp extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <AddItem/>
          <ItemList/>
          <ItemFilter/>
        </Card>
      </div>
    )

  }
}

export default WithMui(withStyles(styles)(TodoListApp))
