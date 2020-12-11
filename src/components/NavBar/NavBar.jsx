import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
      <div>
        <Link to='/login' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        <NavLink to='/entry-form' className='NavBar-link' activeClassName='selected'><strong>+</strong>ENTRY</NavLink>
        {/* get rid of the link below once landing page complete */}
        <NavLink to='/dank-diary' className='NavBar-link' activeClassName='selected'>Dank Diary</NavLink> 
      </div>
      :
      <div>
        <NavLink to='/login' className='NavBar-link' activeClassName="selected">LOG IN</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <NavLink to='/signup' className='NavBar-link' activeClassName="selected">SIGN UP</NavLink>
      </div>;

    return (
      <div className='navbar fixed-top custom-nav'>
        {nav}
      </div>
    );
};

  export default NavBar; 
