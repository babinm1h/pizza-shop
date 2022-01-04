import React from 'react';
import CartEmpty from '../../components/Cart/CartEmpty/CartEmpty';
import "./Cart.scss"
import cartIcon from "../../img/cartIcon.svg"
import trashIcon from "../../img/trashIcon.svg"
import CartItem from '../../components/Cart/CartItem/CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-content">
                <div className="cart-top">
                    <h2 className="cart-title">
                        <img src={cartIcon} alt="cart" /> Корзина
                    </h2>
                    <div className="cart-clear">
                        <img src={trashIcon} alt="delete" /> Очистить корзину
                    </div>
                </div>
                <div className="cart-items">

                    <CartItem />


                    <div className="cart-items_total">
                        <div className="cart-items_totalCount">Всего пицц:
                            <span>3 шт.</span>
                        </div>
                        <div className="cart-items_totalPrice">Сумма заказа:
                            <span>97777 ₽</span>
                        </div>
                    </div>
                </div>
                <div className="cart-bottom">
                    <NavLink to="/">
                        <button className="button cart-button white">Вернуться назад</button>
                    </NavLink>
                    <button className="button cart-button orange">Оплатить сейчас</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;