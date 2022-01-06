import { CartActionTypes, IAddedPizza, IAddPizzaToCartAction, IClearCartAction, IMinusCartItemAction, IPlusCartItemAction, IRemoveItemAction } from "../../types/cartTypes";



export const addPizzaToCart = (pizzaObj: IAddedPizza): IAddPizzaToCartAction => ({ type: CartActionTypes.ADD_PIZZA_TOCART, payload: pizzaObj })

export const clearCart = (): IClearCartAction => ({ type: CartActionTypes.CLEAR_CART })

export const removeItem = (id: number): IRemoveItemAction => ({ type: CartActionTypes.REMOVE_ITEM, payload: id })

export const plusCartItem = (id: number): IPlusCartItemAction => ({ type: CartActionTypes.PLUS_CART_ITEM, payload: id })

export const minusCartItem = (id: number): IMinusCartItemAction => ({ type: CartActionTypes.MINUS_CART_ITEM, payload: id })