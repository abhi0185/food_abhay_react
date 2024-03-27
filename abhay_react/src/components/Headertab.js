import React from 'react';
import {
    Nav1,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './css/NavbarElements';

const Header = (user_name) =>
    {
        return (
	<Nav1>
          <Bars />
            <NavMenu>
		<NavLink to="/">Home</NavLink>
	        <NavLink to="/login">Login</NavLink>
		<NavLink to="/register">Register</NavLink>
	    </NavMenu>
	{user_name ? (
        <NavBtn>
          <NavBtnLink>{`Sign Out ${user_name}`}</NavBtnLink>
        </NavBtn>
      ) : (
        <NavBtn>
          <NavBtnLink disabled>Sign Out</NavBtnLink>
        </NavBtn>
      )}
        </Nav1>
       );
    }
// Remember NavLink, Navbar helps to make Navbar in UI, How it will look
// like above if u hit Register(Headertab) option in UI it will open /register url
// But "Route path" will help you decide what action you do when you open /register url

export default Header;







