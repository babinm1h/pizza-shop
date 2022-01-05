import { CartActionTypes, IAddedPizza, IAddPizzaToCartAction, IClearCartAction, IRemoveItemAction } from "../../types/cartTypes";
import { IPizzaItem } from "../../types/pizzaTypes";

export const addPizzaToCart = (pizzaObj: IAddedPizza): IAddPizzaToCartAction => ({ type: CartActionTypes.ADD_PIZZA_TOCART, payload: pizzaObj })

export const clearCart = (): IClearCartAction => ({ type: CartActionTypes.CLEAR_CART })

export const removeItem = (id: number): IRemoveItemAction => ({ type: CartActionTypes.REMOVE_ITEM, payload: id })