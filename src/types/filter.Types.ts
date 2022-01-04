export interface ISortBy {
    type: string
    order: string
    name: string
}


export interface IFilterState {
    category: number | null
    sortBy: ISortBy
}

export enum FilterActionTypes {
    SET_CATEGORY = "filter/SET_CATEGORY",
    SET_SORTBY = "filter/SET_SORTBY"
}

export interface ISetCategoryAction {
    type: FilterActionTypes.SET_CATEGORY
    payload: number | null
}
export interface ISetSortBy {
    type: FilterActionTypes.SET_SORTBY
    payload: ISortBy
}


export type FilterActions = ISetCategoryAction | ISetSortBy