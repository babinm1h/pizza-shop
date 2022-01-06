import React from 'react';
import CartEmpty from '../../components/Cart/CartEmpty/CartEmpty';
import "./Cart.scss"
import cartIcon from "../../img/cartIcon.svg"
import trashIcon from "../../img/trashIcon.svg"
import CartItem from '../../components/Cart/CartItem/CartItem';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IAddedPizza } from '../../types/cartTypes';
import { useDispatch } from 'react-redux';
import { clearCart, minusCartItem, plusCartItem, removeItem } from '../../redux/actionCreators/cartAC';

const Cart = () => {
    const dispatch = useDispatch()
    const { items, totalCount, totalPrice } = useTypedSelector(state => state.cart)

    const addedItems = Object.keys(items).map(key => items[key as any].items[0])

    if (!totalCount) {
        return <CartEmpty />
    }

    const onClearCart = () => {
        if (window.confirm("Вы действительно хотите очистить корзину?")) {
            dispatch(clearCart())
        }
    }

    const removeCartItem = (id: number) => {
        if (window.confirm("Вы действительно хотите удалить предмет из корзины?")) {
            dispatch(removeItem(id))
        }
    }

    const onPlusCartItem = (id: number) => {
        dispatch(plusCartItem(id))
    }

    const onMinusCartItem = (id: number) => {
        dispatch(minusCartItem(id))
    }

    return (
        <div className="cart">
            <div className="cart-content">
                <div className="cart-top">
                    <h2 className="cart-title">
                        <img src={cartIcon} alt="cart" /> Корзина
                    </h2>
                    <div className="cart-clear" onClick={onClearCart}>
                        <img src={trashIcon} alt="delete" /> Очистить корзину
                    </div>
                </div>
                <div className="cart-items">

                    {addedItems.map((item: IAddedPizza) => <CartItem key={item.id} item={item}
                        totalItemsPrice={items[item.id].totalPrice}
                        totalItemsCount={items[item.id].items.length}
                        removeCartItem={removeCartItem}
                        onPlusCartItem={onPlusCartItem}
                        onMinusCartItem={onMinusCartItem} />)}

                    <div className="cart-items_total">
                        <div className="cart-items_totalCount">Всего пицц:
                            <span>{totalCount} шт.</span>
                        </div>
                        <div className="cart-items_totalPrice">Сумма заказа:
                            <span>{totalPrice} ₽</span>
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