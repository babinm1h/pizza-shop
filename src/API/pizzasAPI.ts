import axios from "axios"
import { IPizzaItem } from "../types/pizzaTypes"

export interface IFetchPizzasResponse {
    pizzas: IPizzaItem[]
}

export const pizzasAPI = {
    async fetchPizzas() {
        let response = await axios.get<IFetchPizzasResponse>(`http://localhost:3000/db.json`)
        return response.data
    }
}