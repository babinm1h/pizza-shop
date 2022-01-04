import React from 'react';

const CartItem = () => {
    return (
        <div className="cart-item">
            <div className="cart-item_img">
                <img src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg" alt="pizza" />
            </div>
            <div className="cart-item_info">
                <p className="cart-item_name">Пепперони</p>
                <div className="cart-item_size">27 cm.</div>
            </div>
            <div className="cart-item_counter">
                <button className="circle-btn counter-btn">-</button>
                <span className="cart-item_count">244</span>
                <button className="circle-btn counter-btn">+</button>
            </div>
            <div className="cart-item_price">
                70011 ₽
            </div>
            <button className="circle-btn remove-btn">X</button>
        </div>
    );
};

export default CartItem;