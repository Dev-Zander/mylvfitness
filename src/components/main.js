import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';



class Main extends Component {
    render(){
        return(
            <div>
            <Header />    
            <div className='main'>
            Main Page
            </div>
            <Footer/>

            </div>
        )
    }
}

export default Main