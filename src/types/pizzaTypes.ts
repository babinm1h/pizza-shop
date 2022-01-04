export interface IPizzaItem {
    id: number
    imageUrl: string
    name: string
    types: number[]
    sizes: number[]
    price: number
    category: number
    rating: number
}


export interface IPizzaState {
    items: IPizzaItem[]
    isLoading: boolean
}

export enum PizzaActionTypes {
    FETCH_PIZZA = "pizza/FETCH_PIZZA",
    SET_IS_LOADING = "pizza/SET_IS_LOADING"
}

export interface IFetchPizzaAction {
    type: PizzaActionTypes.FETCH_PIZZA
    payload: IPizzaItem[]
}
export interface ISetIsLoadingAction {
    type: PizzaActionTypes.SET_IS_LOADING
    payload: boolean
}

export type PizzaActions = IFetchPizzaAction | ISetIsLoadingAction