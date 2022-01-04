import { IPizzaState, PizzaActions, PizzaActionTypes } from "../../types/pizzaTypes"


const initialState: IPizzaState = {
    items: [],
    isLoading: true
}

export const pizzaReducer = (state = initialState, action: PizzaActions): IPizzaState => {
    switch (action.type) {

        case PizzaActionTypes.FETCH_PIZZA:
            return { ...state, items: action.payload }

        case PizzaActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }

        default:
            return state
    }
}