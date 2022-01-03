import React from 'react';
import btnPlus from "../../../img/btnPlus.svg"
import { IPizzaItem } from '../../../types/pizzaTypes';
import classNames from "classnames"

const pizzaSizes = [26, 30, 40]

interface IPizzaBlockProps {
    pizza: IPizzaItem
}

const PizzaBlock: React.FC<IPizzaBlockProps> = ({ pizza }) => {
    const [activeSize, setActiveSize] = React.useState(0)

    return (
        <div className="pizza-block">
            <div className="pizza-block_img">
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
                    <button className="button pizza-block_button">
                        <img src={btnPlus} alt="add" />
                        <span className="button-text">Добавить</span>
                        <span className="button-count">2</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PizzaBlock;