

export interface ICartItems {
    [id: number]: { items: IAddedPizza[], totalPrice: number }
}

export interface IAddedPizza {
    id: number,
    name: string,
    price: number,
    size: number,
    type: number,
    imageUrl: string
}

export interface ICartState {
    items: ICartItems
    totalPrice: number
    totalCount: number
}

export enum CartActionTypes {
    ADD_PIZZA_TOCART = "cart/ADD_PIZZA_TOCART",
    CLEAR_CART = "cart/ADD_CLEAR_CART",
    REMOVE_ITEM = "cart/REMOVE_ITEM",
    PLUS_CART_ITEM = "cart/PLUS_CART_ITEM",
    MINUS_CART_ITEM = "cart/MINUS_CART_ITEM"
}


export interface IAddPizzaToCartAction {
    type: CartActionTypes.ADD_PIZZA_TOCART
    payload: IAddedPizza
}
export interface IClearCartAction {
    type: CartActionTypes.CLEAR_CART
}
export interface IRemoveItemAction {
    type: CartActionTypes.REMOVE_ITEM
    payload: number
}
export interface IPlusCartItemAction {
    type: CartActionTypes.PLUS_CART_ITEM
    payload: number
}
export interface IMinusCartItemAction {
    type: CartActionTypes.MINUS_CART_ITEM
    payload: number
}


export type CartActions =
    IAddPizzaToCartAction | IClearCartAction | IRemoveItemAction | IPlusCartItemAction | IMinusCartItemAction