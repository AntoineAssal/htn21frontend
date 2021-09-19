import React from 'react';
import FormInput from "./FormInput.js";

import { authenticate } from "./AuthenticationService.js";
import useFormValidation from "./UseFormValidation.js";
import ValidateAuthentication from "./ValidateAuthentication.js";
import { Fragment } from 'react';

const INITIAL_STATE = {
    username: "",
    password: "",
};
const LoginForm = () => {

    const sendLogin = async (fields) => {
        await authenticate(fields);
    };

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting,
    } = useFormValidation(INITIAL_STATE, ValidateAuthentication, sendLogin);

    const SignInFrom = () => {
        return (
            <Fragment className="sign_in_area bg_color sec_pad">
                <div className="container">
                    <div className="sign_info">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="sign_info_content">
                                    <h3 className="f_p f_600 f_size_24 t_color3 mb_40">First time here?</h3>
                                    <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br /> start using our <br /><span className="f_700">amazing</span> features!</h2>
                                    <ul className="list-unstyled mb-0">
                                        <li><i className="ti-check"></i> Gain access to interactive training guides.</li>
                                        <li><i className="ti-check"></i> Receive curated articles, tips, and advice.</li>
                                        <li><i className="ti-check"></i> Monitor your dog's health.</li>
                                    </ul>
                                    <button type="submit" className="btn_three sign_btn_transparent">Sign Up</button>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="login_info">
                                    <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>
                                    <form onSubmit={handleSubmit} className="login-form sign-in-form">
                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">Username</label>
                                            <FormInput name="email"
                                                label="user name"
                                                type="text"
                                                className={`${"form-control"}`}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                onChange={handleChange}
                                                placeholder="Email address"
                                            />
                                        </div>
                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">Password</label>
                                            <FormInput
                                                label="Password"
                                                type="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="password"
                                                className={`${"form-control"}`}
                                                value={values.password}
                                                placeholder="Password"
                                            />                                        </div>
                                        <div className="extra mb_20">
                                            <div className="checkbox remember">
                                                <label>
                                                    <input type="checkbox" /> Keep me signed in
                                                </label>
                                            </div>

                                            <div className="forgotten-password">
                                                <a href="/#">Forgot Password?</a>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn_three sign_btn_transparent" onSubmit={isSubmitting} >Sign in</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
};
export default LoginForm;