import React from "react";
import Navbar from "../components/Navbar";
import LandingBanner from "../components/LandingBanner";
import LandingFeatures from "../components/LandingFeatures";
import APITest from "../components/APITest";

const Landingpage = () => {
    return(
        <div className="body_wrapper">
            <LandingBanner/>
           <APITest/>

            </div>
    )
}

export default Landingpage;