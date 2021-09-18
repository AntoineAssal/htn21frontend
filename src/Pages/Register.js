import React from 'react';
import Navbar from '../components/Navbar';
import RegisterationForm from '../components/RegisterationForm';

const SignUp = () => {
    return(
        <div className="body_wrapper">
            <Navbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <RegisterationForm/>
        </div>
    )
}
export default SignUp;