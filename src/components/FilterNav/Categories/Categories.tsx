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
                <li className="categories-item active">fffa</li>
                {categories.map((cat, index) =>
                    <li className="categories-item">{cat}</li>
                )}
            </ul>
        </nav>
    );
};

export default Categories;