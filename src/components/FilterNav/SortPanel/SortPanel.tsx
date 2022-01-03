import React from 'react';

const sortArr = [
    { name: "популярности", type: "rating", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавиту", type: "name", order: "asc" }
]

const SortPanel = () => {
    return (
        <div className="sortby">
            <div className="sortby-info">
                <div className="sortby-label">Сортировка по: </div>
                <div className="sortby-value">популярности</div>
            </div>
            <div className="sortby-panel">
                <ul className="sortby-list">
                    {sortArr.map((sort, index) =>
                        <li className="sortby-list_item">{sort.name}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SortPanel;