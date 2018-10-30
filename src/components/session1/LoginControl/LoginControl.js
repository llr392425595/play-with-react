import React, {Component} from 'react'
import Greeting from '../Greeting/Greeting'

const LoginButton = props => <button onClick={props.onClick}>Login</button>;
const LogoutButton = props => <button onClick={props.onClick}>Logout</button>;

class LoginControl extends Component {
  state = {
    isLoggedIn: false
  };

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  };
  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  };

  render() {
    const {isLoggedIn} = this.state;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}

export default LoginControl
