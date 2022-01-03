import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { pizzaReducer } from "../reducers/pizzaReducer";


const rootReducer = combineReducers({
    pizza: pizzaReducer
})
export type RootState = ReturnType<typeof rootReducer>



export const store = createStore(rootReducer, applyMiddleware(thunk))