import React from 'react';
import FilterNav from '../../components/FilterNav/FilterNav';
import PizzaBlock from '../../components/Home/PizzaBlock/PizzaBlock';
import "./Home.scss"

const Home = () => {

    
    return (
        <>
            <FilterNav />
            <h2 className="content-title">Все пиццы</h2>
            <div className="content-items">
                <PizzaBlock />
            </div>
        </>
    );
};

export default Home;