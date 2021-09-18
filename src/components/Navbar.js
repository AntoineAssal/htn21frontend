import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";

class Navbar extends Component {
    render() {
        var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                    <nav className={`navbar navbar-expand-lg ${mClass}`}>
                        <div className="container ${cClass}">
                            <Link className="navbar-logo" to="/">
                                <img src={slogo} alt="" />
                            </Link>
                            <button className={`navbar-toggler ${nClass}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`collapse navbar-collapse ${cClass}`} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </Sticky>

        )
    }
}
export default Navbar;