import React, { Component } from 'react';
import '../style/style.css';
import logo from '../assets/fda-weights.svg';
import { Link } from 'react-router-dom';





class Header extends Component {
    render(){
        return(
            <div className='header-main'>

            <div className='header-logo'> <img className='header-logo-style' alt='logo' src={logo} /></div>
            <div className='header-title'>Las Vegas Personal Trainers</div>
            <div className='header-button'><Link to={'/'}>Home</Link></div>
            <div className='header-button'><Link to={'/about'}>About Us</Link></div>
            <div className='header-button'><Link to={'/search'}>Trainer Search</Link></div>
            <div className='header-button'><Link to={'/login'}>Login/Sign-Up</Link></div>

            </div>
        )
    }
}

export default Header