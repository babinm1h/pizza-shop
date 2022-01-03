import React from 'react';
import "./Header.scss"
import headerLogo from "../../img/logo.png"
import btnCart from "../../img/btnCart.svg"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
                <div className="header-logoBlock">
                    <img src={headerLogo} alt="logo" />
                    <div>
                        <h1 className="header-title">PIZZA STORE</h1>
                        <p className="header-subtitle">лучшая пицца</p>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/cart">
                <button className="header-button">
                    <div>777 ₽</div>
                    <span></span>
                    <div><img src={btnCart} alt="cart" /> 3</div>
                </button>
            </NavLink>
        </header>
    );
};

export default Header;