import React from 'react';
import "./Header.scss"
import headerLogo from "../../img/logo.png"
import btnCart from "../../img/btnCart.svg"
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Header = () => {
    const { totalCount, totalPrice } = useTypedSelector(state => state.cart)

    return (
        <header className="header">
            <NavLink to="/">
                <div className="header-logoBlock">
                    <img src={headerLogo} alt="logo" />
                    <div>
                        <h1 className="header-title">PIZZA SHOP</h1>
                        <p className="header-subtitle">лучшая пицца в мире</p>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/cart">
                <button className="header-button">
                    <div>{totalPrice} ₽</div>
                    <span></span>
                    <div><img src={btnCart} alt="cart" />{totalCount}</div>
                </button>
            </NavLink>
        </header>
    );
};

export default Header;