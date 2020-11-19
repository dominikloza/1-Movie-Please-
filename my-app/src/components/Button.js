import React from 'react';

const Button = ({text, btnType}) => {
    return (
        <div className="btn_box">
            <button type="submit"  className={btnType}>{text}</button>
        </div>
    );
};

export default Button;