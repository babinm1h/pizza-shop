import { CartActions, CartActionTypes, IAddedPizza, ICartState } from "../../types/cartTypes"

const initialState: ICartState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = (arr: IAddedPizza[]) => arr.reduce((prev, obj) => obj.price + prev, 0)

export const cartReducer = (state = initialState, action: CartActions): ICartState => {
    switch (action.type) {

        case CartActionTypes.ADD_PIZZA_TOCART: {

            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const totalPrice = Object.keys(newItems)
                .reduce((prev, key) => newItems[key as any].totalPrice + prev, 0)

            const totalCount = Object.keys(newItems)
                .reduce((prev: number, key) => newItems[key as any].items.length + prev, 0)

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }


        case CartActionTypes.CLEAR_CART:
            return { items: {}, totalCount: 0, totalPrice: 0 }


        case CartActionTypes.REMOVE_ITEM: {
            const newItems = { ...state.items }
            delete newItems[action.payload]

            return { ...state, items: newItems }
        }



        
        default:
            return state
    }
}