import React from 'react';
import sortIcon from "../../../img/sortIcon.svg"
import { ISortBy } from '../../../types/filter.Types';
import "../FilterNav.scss"

const sortArr = [
    { name: "популярности", type: "rating", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавиту", type: "name", order: "asc" }
]

interface ISortPanelProps {
    selectSortBy: (sortBy: ISortBy) => void
    activeSortType: string
}

const SortPanel: React.FC<ISortPanelProps> = ({ selectSortBy, activeSortType }) => {
    const [visiblePanel, setVisiblePanel] = React.useState(false)
    const sortRef = React.useRef<HTMLDivElement | any>()

    const [activeSort, setActiveSort] = React.useState(0)

    const onSelectSort = (index: number) => {
        setActiveSort(index)
        selectSortBy(sortArr[index])
        setVisiblePanel(false)
    }


    const toggleVisiblePanel = () => {
        setVisiblePanel(!visiblePanel)
    }

    const handleOutsideClick = (e: any) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisiblePanel(false)
        }
    }

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick)
    }, [])

    return (
        <div className="sortby" ref={sortRef}>
            <div className="sortby-info">
                <div className="sortby-label">
                    <img src={sortIcon} alt="trigon" className={visiblePanel ? "rotated" : ""} />
                    Сортировка по: </div>
                <p className="sortby-value" onClick={toggleVisiblePanel}>
                    {activeSortType}
                </p>
            </div>
            {visiblePanel &&
                <div className="sortby-panel">
                    <ul className="sortby-list">
                        {sortArr.map((sort, index) =>
                            <li key={sort.name}
                                className={activeSort === index ? "sortby-list_item active" : "sortby-list_item"} onClick={() => onSelectSort(index)}>
                                {sort.name}
                            </li>
                        )}
                    </ul>
                </div>}
        </div>
    );
};

export default SortPanel;