import React from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../../components/FilterNav/Categories/Categories';
import SortPanel from '../../components/FilterNav/SortPanel/SortPanel';
import PizzaBlock from '../../components/Home/PizzaBlock/PizzaBlock';
import PizzaLoader from '../../components/Home/PizzaLoader/PizzaLoader';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { setCategory, setSortBy } from '../../redux/actionCreators/filterAC';
import { fetchAllPizzas } from '../../redux/actionCreators/pizzaAC';
import { ISortBy } from '../../types/filter.Types';
import "./Home.scss"

const Home = () => {
    const dispatch = useDispatch()
    const { items, isLoading } = useTypedSelector(state => state.pizza)
    const { sortBy, category } = useTypedSelector(state => state.filter)

    React.useEffect(() => {
        dispatch(fetchAllPizzas(category, sortBy.type, sortBy.order))
    }, [sortBy, category])


    const selectCategory = (index: number | null) => {
        dispatch(setCategory(index))
    }

    const selectSortBy = (sortBy: ISortBy) => {
        dispatch(setSortBy(sortBy))
    }

    return (
        <>
            <div className="categories">
                <Categories selectCategory={selectCategory} activeCategory={category} />
                <SortPanel selectSortBy={selectSortBy} activeSortType={sortBy.name} />
            </div>
            <h2 className="content-title">Все пиццы</h2>
            <div className="content-items">
                {isLoading
                    ? Array(10).fill(0).map((item, index) => <PizzaLoader key={index} />)
                    : items.map(item => <PizzaBlock key={item.id} pizza={item} />)}
            </div>
        </>
    );
};

export default Home;