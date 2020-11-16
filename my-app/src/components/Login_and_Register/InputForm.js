import React from 'react';

const InputForm = ({label,type}) => {
    return (
        <div className="input_form">
            <label>{label}</label>
            <input type={type}/>
        </div>
    );
};

export default InputForm;