import React from 'react';

const categories = ["Мясные", "Вегатарианские", "Гриль", "Острые", "Закрытые"]

const Categories = () => {
    const [activeCat, setActiveCat] = React.useState<number | null>(null)

    const onSetCateg = (index: number) => {
        setActiveCat(index)
    }

    return (
        <nav className="categories-nav">
            <ul className="categories-list">
                <li className={activeCat === null ? "categories-item active" : "categories-item"}
                    onClick={() => setActiveCat(null)}>Все</li>
                {categories.map((cat, index) =>
                    <li className={activeCat === index ? "categories-item active" : "categories-item"}
                        key={cat} onClick={() => setActiveCat(index)}>
                        {cat}
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Categories;