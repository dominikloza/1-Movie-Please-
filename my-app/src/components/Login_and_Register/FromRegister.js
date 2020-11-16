import React, {useState} from 'react';
import Button from "../Button";
import {useFormik} from 'formik';
import { useHistory } from "react-router-dom";

const style = {
    fontFamily: "Niramit",
    color: "#a52753",
    backgroundColor:"#f5d6e1",
    padding: "3px 10px",
    marginBottom: "10px",
    borderRadius: "8px"
}

const validate = values => {
    const errors = {};
    if (!values.fullName) {
        errors.fullName = 'Required';
    } else if (values.fullName.length < 3) {
        errors.fullName = 'Must be 3 characters or more';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more';
    }
    if (!values.passwordRepeat) {
        errors.passwordRepeat = 'Required';
    } else if (values.passwordRepeat !== values.password) {
        errors.passwordRepeat = 'Passwords must be the same';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const FormRegister = ({setName, title}) => {

    const formik = useFormik({
        initialValues: {
            fullName: '',
            password: '',
            passwordRepeat: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            setName(formik.values.fullName);
            alert(JSON.stringify(values, null, 2));
        },
    });

    let history = useHistory();

    return (
        <div className="container">
            <div className="form_box register">
                <h1>{title}</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="input_form">
                        <label htmlFor="fullName">Name</label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                        />
                    </div>
                    {formik.touched.fullName && formik.errors.fullName ? (
                        <div style={style}>{formik.errors.fullName}</div>
                    ) : null}
                    <div className="input_form">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                        <div style={style}>{formik.errors.email}</div>
                    ) : null}
                    <div className="input_form">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                        <div style={style}>{formik.errors.password}</div>
                    ) : null}
                    <div className="input_form">
                        <label htmlFor="passwordRepeat">Repeat Password</label>
                        <input
                            id="passwordRepeat"
                            name="passwordRepeat"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.passwordRepeat}
                        />
                    </div>
                    {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
                        <div style={style}>{formik.errors.passwordRepeat}</div>
                    ) : null}
                   <Button btnType="btn btn-primary-small" onClick={history.push("/preferences")} text="Done"/>
                </form>
            </div>
        </div>
    );
};

export default FormRegister;