import React from "react";
import Navbar from "../components/Navbar";
import LandingBanner from "../components/LandingBanner";
import Landing from "../components/Landing";

const Landingpage = () => {
    return(
        <div className="body_wrapper">
            {
            //<Navbar slogo="sticky_logo" mClass="menu" nClass="w_menu"/>
            }
            <LandingBanner/>
            </div>
    )
}

export default Landingpage;