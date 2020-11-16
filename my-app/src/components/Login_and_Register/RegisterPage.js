import React from 'react';
import Header from "./Header";
import FormRegister from "./FromRegister";

const RegisterPage = ({setName}) => {
    return (
        <div className="page">
            <Header/>
            <FormRegister setName={setName} title="Register"/>
        </div>
    );
};

export default RegisterPage;