import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';




class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='main'>

                <div className='login-container'>

                <div>User Name</div>
                <div> Password</div>
                <div>
                <div>Login</div>
                <div>Register</div>
                </div>

                </div>


                </div>
                <Footer />

            </div>
        )
    }
}

export default Login