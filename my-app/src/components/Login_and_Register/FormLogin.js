import React, {useEffect, useState} from 'react';
import Button from "../Button";
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import fire from "../../firebase";
import MainView from "../Main_Page/MainView";


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

    return errors;
};

const FormLogin = ({title}) => {

    const [user,setUser] = useState({});

    useEffect(() => {
        authListener();
    }, [])


    const authListener = () => {
        fire.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
        { user ? (<MainView/>) : (
    <div className="container">
        <div className="form_box register">
            <h1>{title}</h1>
            <form onSubmit={formik.handleSubmit}>
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
                <Link to="/user"><Button btnType="btn btn-primary" text="Sign In"/></Link>
            </form>
        </div>
    </div>
        )}
        </>
    );
};

export default FormLogin;