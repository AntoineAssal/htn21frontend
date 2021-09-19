import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../img/logo.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/process' activeStyle>
            Process
          </NavLink>
          <NavLink to='/faq' activeStyle>
            FAQ
          </NavLink>
          <NavLink to='/register' activeStyle>
            Sign Up
          </NavLink>
    
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;