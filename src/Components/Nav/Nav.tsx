import * as React from 'react';
import './Nav.css';
import Logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";

function Nav() {




    return (
        <nav className='nav'>
            <Link to='/'> <img src={Logo} className='logo' /></Link>
            <Link to='/booking' style={{ textDecoration: 'none' }}><p className='link-head'>Book a Table </p> </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}> <p className='link-head'>About Us</p></Link>
        </nav>
    )




}

export default Nav;