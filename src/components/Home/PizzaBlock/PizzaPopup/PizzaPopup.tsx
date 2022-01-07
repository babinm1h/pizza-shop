import React from 'react';

interface IPizzaPopupProps {
    img: string
    closePopup: () => void
    title: string
    recipe: string[]
}

const PizzaPopup: React.FC<IPizzaPopupProps> = ({ img, closePopup, title, recipe }) => {
    return (
        <div className="popup" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <img src={img} alt="" />
                <div className="pizza-info">
                    <h3 className="popup-title">{title} <span>cостав:</span></h3>
                    <ul className="pizza-recipe">
                        {recipe.map(r => <li key={r}>{r}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PizzaPopup;