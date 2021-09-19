import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

class LandingFeatures extends Component {
    render() {
        return (
            <section className="features_area">
                <div className="bg_shape shape_one"></div>
                <div className="bg_shape shape_two"></div>
                <div className="bg_shape shape_three"></div>
                <div className="container">
                    <div className="row featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInLeft">
                                <div className="feature1_img">
                                    <img src={require("../img/home/feature1.png")} alt="" />
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="features_content pl_70">
                                    <div className="icon">
                                        <img className="img_shape" src={require('../img/home/icon_shape.png')} alt="" />
                                    </div>
                                    <h2>Curated guides</h2>
                                    <p>blablaabla step by step guide!</p>

                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="row flex-row-reverse featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="feature1_img img_two">
                                    <img src={require("../img/home/feature2.png")} alt="" />
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInLeft" duration={1200}>
                                <div className="features_content pr_70">
                                    <div className="icon">
                                        <img className="img_shape" src={require('../img/home/icon_shape.png')} alt="" />
                                    </div>
                                    <h2>Health monitor</h2>
                                    <p>blabla about dashboard</p>

                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default LandingFeatures;