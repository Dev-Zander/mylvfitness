import React, { Component } from 'react';
import '../style/style.css';
import logo from '../assets/fda-weights.svg';




class Header extends Component {
    render(){
        return(
            <div className='header-main'>

            <div className='header-logo'> <img className='header-logo-style' alt='logo' src={logo} /></div>
            <div className='header-title'>Las Vegas Personal Trainers</div>
            <div className='header-button'>Home</div>
            <div className='header-button'>About Us</div>
            <div className='header-button'>Trainer Search</div>
            <div className='header-button'>Login/Sign Up</div>

            </div>
        )
    }
}

export default Header