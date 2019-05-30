import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import mainImage from '../assets/mainpageImage.jpg';



class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='main'>


                    <h2 className='main-welcome'>Welcome to My LV Fitness!</h2>

                    
                    <div className='main-paragraph-container'>
                    <div className='main-paragraph'><p>The website is designed to connect those needing Personal Training to those offering Personal Training Services in the Las Vegas and surrounding market. If you are a Personal Trainer looking to be listed on this site registration is free. If you are in need of a Personal Trainer please feel free to use the search function to find the right trainer for you.</p></div>

                    <div><img className='main-image' alt="Danielle Cerullo on Unsplash" src={mainImage}></img></div>
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}

export default Main