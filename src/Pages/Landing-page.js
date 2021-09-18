import React from "react";
import LandingBanner from "../components/LandingBanner";
import LandingFeatures from "../components/LandingFeatures";
import APITest from "../components/APITest";

const Landingpage = () => {
    return(
        <div className="body_wrapper">
            <LandingBanner/>
            <LandingFeatures/>
            </div>
    )
}

export default Landingpage;