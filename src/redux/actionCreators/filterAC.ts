import { FilterActionTypes, ISetCategoryAction, ISetSortBy, ISortBy } from "../../types/filter.Types";

export const setCategory = (category: number | null): ISetCategoryAction => ({ type: FilterActionTypes.SET_CATEGORY, payload: category })

export const setSortBy = (sortBy: ISortBy): ISetSortBy => ({ type: FilterActionTypes.SET_SORTBY, payload: sortBy })


