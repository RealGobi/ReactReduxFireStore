import React from 'react';
import { Link } from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
const headerStyle = {
    marginLeft: '5rem'
}
const  Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to='/' className="brand-logo left" style={headerStyle}>Mario Plan</Link>
                <SignInLink />
                <SignOutLink />
            </div>
        </nav>  
    )
}

export default Navbar;