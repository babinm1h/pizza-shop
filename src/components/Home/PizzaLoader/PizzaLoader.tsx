import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoader = () => {
    return (
        <ContentLoader
            speed={1}
            width={280}
            height={420}
            viewBox="0 0 280 420"
            backgroundColor="#d1d1d1"
            foregroundColor="#ffffff"
            className="pizza-block"
        >
            <circle cx="130" cy="120" r="120" />
            <rect x="0" y="255" rx="15" ry="15" width="280" height="30" />
            <rect x="197" y="397" rx="0" ry="0" width="21" height="0" />
            <rect x="0" y="300" rx="15" ry="15" width="280" height="44" />
            <rect x="90" y="363" rx="35" ry="35" width="180" height="50" />
        </ContentLoader>
    )
};

export default PizzaLoader;