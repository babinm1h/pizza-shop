import React from 'react';
import { IAddedPizza } from '../../../types/cartTypes';

interface ICartItemProps {
    item: IAddedPizza
    totalItemsPrice: number
    totalItemsCount: number
    removeCartItem: (id: number) => void
}

const CartItem: React.FC<ICartItemProps> =
    ({ item, totalItemsPrice, totalItemsCount, removeCartItem }) => {

        const onRemoveCartItem = () => {
            removeCartItem(item.id)
        }

        return (
            <div className="cart-item">
                <div className="cart-item_img">
                    <img src={item.imageUrl} alt="pizza" />
                </div>
                <div className="cart-item_info">
                    <p className="cart-item_name">{item.name}</p>
                    <div className="cart-item_size">{item.size} см.</div>
                </div>
                <div className="cart-item_counter">
                    <button className="circle-btn counter-btn">-</button>
                    <span className="cart-item_count">{totalItemsCount}</span>
                    <button className="circle-btn counter-btn">+</button>
                </div>
                <div className="cart-item_price">
                    {totalItemsPrice} ₽
                </div>
                <button onClick={onRemoveCartItem} className="circle-btn remove-btn">X</button>
            </div>
        );
    };

export default CartItem;