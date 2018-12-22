import { Component } from 'react';
import { setIdToken, setAccessToken, setState } from './auth-service';

class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();
    setState();
  }

  render() {
    return null;
  }
}

export default Callback;