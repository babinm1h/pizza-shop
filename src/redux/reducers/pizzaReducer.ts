import { IPizzaState, PizzaActions, PizzaActionTypes } from "../../types/pizzaTypes"


const initialState: IPizzaState = {
    items: []
}

export const pizzaReducer = (state = initialState, action: PizzaActions): IPizzaState => {
    switch (action.type) {

        case PizzaActionTypes.FETCH_PIZZA:
            return { ...state, items: action.payload }

        default:
            return state
    }
}