import React from "react";
import Reveal from "react-reveal/Reveal";

const Landing = () => {
    return (
        <section className="landing_area">
            <div className="landing_top">
                <div className="landing_right">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Reveal effect="fadeInUp" duration={500}>
                                    <div className="features_content pr_70">
                                        <h2>Header stuff</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;



