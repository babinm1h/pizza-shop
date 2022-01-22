import { Dispatch } from "react";
import { pizzasAPI } from "../../API/pizzasAPI";
import { IFetchPizzaAction, IPizzaItem, ISetIsLoadingAction, PizzaActions, PizzaActionTypes } from "../../types/pizzaTypes";


// ActionCreators
export const fetchPizza = (items: IPizzaItem[]): IFetchPizzaAction => ({ type: PizzaActionTypes.FETCH_PIZZA, payload: items })

export const setIsLoading = (isLoading: boolean): ISetIsLoadingAction => ({ type: PizzaActionTypes.SET_IS_LOADING, payload: isLoading })



// Thunks
export const fetchAllPizzas = (category: number | null, sortType: string, order: string) => {
    return async (dispatch: Dispatch<PizzaActions>) => {
        try {
            dispatch(setIsLoading(true))
            let res = await pizzasAPI.fetchPizzas(category, sortType, order)
            dispatch(fetchPizza(res))
            dispatch(setIsLoading(false))
        } catch (e) {
            console.log(e)
        }
    }
}