import React, {Component} from 'react'
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import green from "@material-ui/core/es/colors/green";
import withStyles from "@material-ui/core/es/styles/withStyles";
import connect from "react-redux/es/connect/connect";
import {addTodo} from "../../actions/todo";
import shortid from 'shortid'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: green[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: green[500],
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  inputChangeHandler = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const todo = {
      id: shortid(),
      title: this.state.text,
      date: '2018-11-11'
    };
    this.props.addTodo(todo);
  };

  render() {
    const {classes} = this.props;

    return (
      <form onSubmit={this.submitHandler}>
        <FormControl fullWidth={true} className={classes.margin}>
          <InputLabel
            htmlFor="add-todo-item"
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
          >
            Todo:
          </InputLabel>
          <Input
            id="add-todo-item"
            classes={{
              root: classes.input,
              underline: classes.cssUnderline,
            }}
            fullWidth={true}
            value={this.state.text}
            onChange={this.inputChangeHandler}
            onKeyDown={this.keyDownHandler}
          />
        </FormControl>
      </form>
    );
  }
}


const mapStateToProps = state => ({
  todos: state.todos
});

export default withStyles(styles)(connect(mapStateToProps, {addTodo})(AddItem))
