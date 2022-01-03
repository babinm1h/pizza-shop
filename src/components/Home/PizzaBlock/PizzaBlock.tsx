import React from 'react';
import btnPlus from "../../../img/btnPlus.svg"

const PizzaBlock = () => {
    return (
        <div className="pizza-block">
            <div className="pizza-block_img">
                <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/e9624d2bf1ae41598cd6635c0d3ed0f6_292x292.jpeg" alt="pizza" />
            </div>
            <div className="pizza-block_info">
                <h3 className="pizza-block_name">Пепперони</h3>
                <div className="pizza-block_selectSize">
                    <ul>
                        <li className="active">25 cm</li>
                        <li>30 cm</li>
                        <li>40 cm</li>
                    </ul>
                </div>
                <div className="pizza-block_bottom">
                    <div className="pizza-block_price">от 777 ₽</div>
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