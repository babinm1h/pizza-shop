import React from 'react';

const categories = ["Мясные", "Вегатарианские", "Гриль", "Острые", "Закрытые"]

interface ICategoriesProps {
    selectCategory: (index: number | null) => void
    activeCategory: number | null
}

const Categories: React.FC<ICategoriesProps> = ({ selectCategory, activeCategory }) => {

    const onSelectCategory = React.useCallback((index: number | null) => {
        selectCategory(index)
    }, [])

    return (
        <nav className="categories-nav">
            <ul className="categories-list">
                <li className={activeCategory === null ? "categories-item active" : "categories-item"}
                    onClick={() => onSelectCategory(null)}>
                    Все
                </li>
                {categories.map((cat, index) =>
                    <li className={activeCategory === index ? "categories-item active" : "categories-item"} key={cat}
                        onClick={() => onSelectCategory(index)}>
                        {cat}
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Categories;