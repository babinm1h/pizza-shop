import { FilterActions, FilterActionTypes, IFilterState } from "../../types/filter.Types"

const initialState: IFilterState = {
    category: null,
    sortBy: {
        type: "rating",
        order: "desc",
        name: "популярности"
    }
}


export const filterReducer = (state = initialState, action: FilterActions): IFilterState => {
    switch (action.type) {

        case FilterActionTypes.SET_CATEGORY:
            return { ...state, category: action.payload }

        case FilterActionTypes.SET_SORTBY:
            return { ...state, sortBy: action.payload }


        default:
            return state
    }
}