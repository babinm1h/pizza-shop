import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { filterReducer } from "../reducers/filterReducer";
import { pizzaReducer } from "../reducers/pizzaReducer";


const rootReducer = combineReducers({
    pizza: pizzaReducer,
    filter: filterReducer
})
export type RootState = ReturnType<typeof rootReducer>



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))