import React from 'react';
import btnPlus from "../../../img/btnPlus.svg"
import { IPizzaItem } from '../../../types/pizzaTypes';
import classNames from "classnames"
import { IAddedPizza } from '../../../types/cartTypes';
import PizzaPopup from './PizzaPopup/PizzaPopup';

const pizzaSizes = [26, 30, 40]

interface IPizzaBlockProps {
    pizza: IPizzaItem
    addToCart: (pizza: IAddedPizza) => void
    inCartCount: number
}

const PizzaBlock: React.FC<IPizzaBlockProps> = ({ pizza, addToCart, inCartCount }) => {
    const [activeSize, setActiveSize] = React.useState(0)
    const [openPopup, setOpenPopup] = React.useState(false)

    const onAddToCart = () => {
        const obj: IAddedPizza = {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            size: pizzaSizes[activeSize],
            type: 0,
            imageUrl: pizza.imageUrl
        }
        addToCart(obj)
    }

    const onImgClick = () => {
        setOpenPopup(true)
    }
    const closePopup = () => {
        setOpenPopup(false)
    }

    return (
        <>
            <div className="pizza-block">
                <div className="pizza-block_img" onClick={onImgClick}>
                    <img src={pizza.imageUrl} alt="pizza" />
                </div>
                <div className="pizza-block_info">
                    <h3 className="pizza-block_name">{pizza.name}</h3>
                    <div className="pizza-block_selectSize">
                        <ul>
                            {pizzaSizes.map((size, index) =>
                                <li className={classNames({
                                    active: activeSize === index,
                                    disabled: !pizza.sizes.includes(size)
                                })}
                                    onClick={() => setActiveSize(index)} key={size}>
                                    {size} см
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="pizza-block_bottom">
                        <div className="pizza-block_price">от {pizza.price} ₽</div>
                        <button className="button pizza-block_button" onClick={onAddToCart}>
                            <img src={btnPlus} alt="add" />
                            <span className="button-text">Добавить</span>
                            {inCartCount && <span className="button-count">{inCartCount}</span>}
                        </button>
                    </div>
                </div>
            </div>
            {openPopup && <PizzaPopup img={pizza.imageUrl}
                closePopup={closePopup} title={pizza.name} recipe={pizza.recipe} />}
        </>
    );
};

export default PizzaBlock;