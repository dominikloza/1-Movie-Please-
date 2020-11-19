import React from 'react';
import Header from "./Header";
import FormRegister from "./FromRegister";


const RegisterPage = ({setRegisterData}) => {


    return (
        <div className="page">
            <Header/>
            <FormRegister title="Register" setRegisterData={setRegisterData}/>
        </div>
    );
};

export default RegisterPage;