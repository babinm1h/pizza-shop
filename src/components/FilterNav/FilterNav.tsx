import React from 'react';
import Categories from './Categories/Categories';
import "./FilterNav.scss"
import SortPanel from './SortPanel/SortPanel';

const FilterNav = () => {
    return (
        <div className="categories">
            <Categories />
            <SortPanel />
        </div>
    );
};

export default FilterNav;