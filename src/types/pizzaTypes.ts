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
}

export enum PizzaActionTypes {
    FETCH_PIZZA = "pizza/FETCH_PIZZA"
}

export interface IFetchPizzaAction {
    type: PizzaActionTypes.FETCH_PIZZA
    payload: IPizzaItem[]
}

export type PizzaActions = IFetchPizzaAction