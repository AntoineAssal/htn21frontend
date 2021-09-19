import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import SignInForm from '../components/SignInForm';


const Login = () => {
    return(
        <div className="body_wrapper">
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="banner_bg.png" Ptitle="Sign In" Pdescription="ladjfknlfkjenlefjoliejoljnmfewopljmnewpefwwgrwrg!!"/>
            <SignInForm/>
        </div>
    )
}
export default Login;