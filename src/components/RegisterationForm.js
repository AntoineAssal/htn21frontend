import React from "react";

const RegisterationForm = () => {
    return (
        <section className="user_area bg_color sec_pad">
            <div className="container">
                <div className="user_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="user_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40"> Already have an account?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br/> start using our <br/><span className="f_700">amazing</span> features!</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Gain access to interactive training guides.</li>
                                    <li><i className="ti-check"></i> Receive curated articles, tips, and advice.</li>
                                    <li><i className="ti-check"></i> Monitor your dog's health.</li>
                                </ul>
                                <button type="submit" className="btn_three sign_btn_t">Log me in</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                                <form action="#" className="login-form sign-in-form">
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Username</label>
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" placeholder="htn@gmail.com" />
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input type="password" placeholder="******" />
                                    </div>
                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox" /> I agree to terms and conditions.
                                            </label>
                                        </div>

                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn_three">Sign Up</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RegisterationForm;