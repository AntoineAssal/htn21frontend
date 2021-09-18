import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal'

class LandingBanner extends Component {
    render(){
        return(
            <section className="home_banner_area">
                <div className="shape one"></div>
                <div className="shape two"></div>
                <div className="container">
                   <Reveal effect="fadeInLeft" duration={500}>
                        <div className="home_banner_content wow fadeInLeft" data-wow-delay="0.4s">
                            <h1 className="f_p f_700 f_size_50 w_color">Punchline</h1>
                            <p className="w_color f_p f_size_18">Some slogan</p>
                            <div className="action_btn d-flex align-items-center mt_60">
                                <a href=".#" className="btn_hover banner_btn">Sign Up for Free</a>
                            </div>
                        </div>
                   </Reveal>
                </div>
                <Reveal effect="fadeInLeft" duration={1200}>
                <div className="animation_img_two wow fadeInRight" data-wow-delay="0.5s">
                    <img src={require ('../img/home/demo_devices.png')} alt=""/>
                </div>
                </Reveal>
                <img className="svg_intro_bottom" src={require ('../img/home/shape.png')} alt=""/>
            </section>
        )
    }
}
export default LandingBanner;