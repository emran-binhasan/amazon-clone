import React from 'react';
import logo from '../../images/logo.png';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;