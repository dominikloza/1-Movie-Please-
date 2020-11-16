import React from 'react';

const CategoryLine = ({cat1, cat2 ,cat3}) => {
    return (
        <div className="category_box">
            <div className="category">{cat1}</div>
            <div className="category">{cat2}</div>
            <div className="category">{cat3}</div>
        </div>
    );
};

export default CategoryLine;