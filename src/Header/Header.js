import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-class'>
            <nav className='text'>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/Features'>Features</NavLink>
                <NavLink to='/shopping'>shopping</NavLink>
                <NavLink to='/Friends'>Friends</NavLink>
                <NavLink to='/posts'>posts</NavLink>

                <NavLink to='/contact'>contact us</NavLink>
            </nav>
            <br />
            <p>yay</p>
        </div>
    );
};

export default Header;