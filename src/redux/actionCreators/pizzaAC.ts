import { Dispatch } from "react";
import { pizzasAPI } from "../../API/pizzasAPI";
import { IFetchPizzaAction, IPizzaItem, PizzaActions, PizzaActionTypes } from "../../types/pizzaTypes";

// ActionCreators
export const fetchPizza = (items: IPizzaItem[]): IFetchPizzaAction => ({ type: PizzaActionTypes.FETCH_PIZZA, payload: items })




// Thunks
export const fetchAllPizzas = () => {
    return async (dispatch: Dispatch<PizzaActions>) => {
        let res = await pizzasAPI.fetchPizzas()
        dispatch(fetchPizza(res.pizzas))
    }
}