import React, {Component} from 'react'
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import green from "@material-ui/core/es/colors/green";
import withStyles from "@material-ui/core/es/styles/withStyles";

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

class AddTodoForm extends Component {
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
    this.props.addTodo(this.state.text);
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

export default withStyles(styles)(AddTodoForm)
