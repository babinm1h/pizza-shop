import axios from "axios"
import { IPizzaItem } from "../types/pizzaTypes"


export const pizzasAPI = {
    async fetchPizzas(category: number | null, sortType: string, order: string) {
        let response = await axios.get<IPizzaItem[]>(`/pizzas?${category !== null ? `category=${category}&` : ""}_sort=${sortType}&_order=${order}`)

        return response.data
    }
}