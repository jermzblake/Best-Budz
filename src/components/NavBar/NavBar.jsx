import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
      <div>
        <Link to='/login' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        <NavLink to='/entry-form' className='NavBar-link' activeClassName='selected'>ADD ENTRY</NavLink>
        {/* the below link is for testing purposes only get rid of it before deployment */}
        <NavLink to='/dank-diary' className='NavBar-link' activeClassName='selected'>Dank Diary</NavLink> 
      </div>
      :
      <div>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <NavLink to='/signup' className='NavBar-link' activeClassName="selected">SIGN UP</NavLink>
      </div>;

    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
};

  export default NavBar; 
