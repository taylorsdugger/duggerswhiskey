import { Component } from 'react';
import { login } from './auth-service';

class Login extends Component {

  componentDidMount() {
    login('/');
  }

  render() {
    return null;
  }
}

export default Login;