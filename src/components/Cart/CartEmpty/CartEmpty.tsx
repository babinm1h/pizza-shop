import React from 'react';
import { NavLink } from 'react-router-dom';

const CartEmpty = () => {
    return (
        <div className="cart-empty">
            <h2 className="cart-empty_title">Корзина пустая!</h2>
            <p>Вероятней всего, вы еще не заказывали пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <div className="cart-empty_img">
                <img src="https://www.clipartmax.com/png/full/258-2586152_shopping-cart-light-orange-shopping-basket-vector-png.png" alt="cart" />
            </div>
            <NavLink to="/">
                <button className="button cart-button">Перейти на главную</button>
            </NavLink>
        </div>
    );
};

export default CartEmpty;