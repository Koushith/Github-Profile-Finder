import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import { Link } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

const Header = () => {
  // values avaliable in the userconyext is now avaliable inside context variable
  const context = useContext(UserContext);
  // state for toggle bar menu
  const [isOpen, setIsOpen] = useState(false);
  // true-false flipping switches
  const toggle = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <Navbar color='info' light expand='md'>
      <NavbarBrand>
        <Link to='/' className='text-white'>
          GitHub Profile Fetcher
        </Link>
      </NavbarBrand>
      {/* onclick and collapse- bootstrap docs */}
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink className='text-white' tag={Link} to='/signup'>
              Signup
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-white' tag={Link} to='/signin'>
              Signin
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-white' tag={Link} to='/'>
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
