import React from 'react';
import { isLoggedIn, getUserProfile, login, logout } from './auth-service';
import { Image, Button } from 'react-bootstrap';

class AuthLoginProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        getUserProfile().then(x => {
            this.setState({ picture: x.picture, nickname: x.nickname });
        })
    }
    login() {
        login('/');
    }
    logout() {
        logout('/');
    }
    render() {
        if (isLoggedIn()) {
            return (
                <div>
                    <span className='red-underline-text' onClick={this.logout}>LOGOUT&nbsp;</span>
                    <Image src={this.state.picture} circle height={20} />
                </div>
            )
        }
        else {
            return (<span className='red-underline-text' onClick={this.login}>LOGIN</span>)
        }
    }
}
export default AuthLoginProfile;