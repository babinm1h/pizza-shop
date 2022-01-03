import React from 'react';
import { useDispatch } from 'react-redux';
import FilterNav from '../../components/FilterNav/FilterNav';
import PizzaBlock from '../../components/Home/PizzaBlock/PizzaBlock';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchAllPizzas } from '../../redux/actionCreators/pizzaAC';
import "./Home.scss"

const Home = () => {
    const dispatch = useDispatch()
    const { items } = useTypedSelector(state => state.pizza)

    React.useEffect(() => {
        dispatch(fetchAllPizzas())
    }, [])



    return (
        <>
            <FilterNav />
            <h2 className="content-title">Все пиццы</h2>
            <div className="content-items">
                {items.map(item => <PizzaBlock key={item.id} pizza={item} />)}
            </div>
        </>
    );
};

export default Home;