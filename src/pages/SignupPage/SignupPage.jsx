import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignupPage extends Component {
    render(){
        return (
            <div>
                SignUp
                <NavLink to='/login' activeClassName="selected">Log In</NavLink>
            </div>
        )
    }
}

export default SignupPage;