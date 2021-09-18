import React, { Component } from 'react';

export default class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            removed: false
        };
    }

    componentDidMount() {
        window.onload = () => {
            this.setState({
                loading: false
            });
            setTimeout(() => {
                this.setState({
                    removed: true
                });
            }, 2000);
        };
    }
    render() {
        return this.state.removed ? null : (
            <div id="loader-wrapper">
                <div id="loader" className={("loader", { loading: this.state.loading })}>
                    <div className="loader-animation">
                        <div className="spinner" />
                        <div className="text-loading">
                            <span preloader_text="G" className="letters-loading">
                                G
                            </span>
                            <span preloader_text="O" className="letters-loading">
                                O
                            </span>
                            <span preloader_text="O" className="letters-loading">
                                O
                            </span>
                            <span preloader_text="D" className="letters-loading">
                                D
                            </span>
                            <span preloader_text="B" className="letters-loading">
                                B
                            </span>
                            <span preloader_text="O" className="letters-loading">
                                O
                            </span>
                            <span preloader_text="Y" className="letters-loading">
                                Y
                            </span>
                        </div>
                        <p className="text-center"> Loading... </p>
                    </div>
                    <div className="loader">
                        <div className="row">
                            <div className="col-3 loader-section section-left">
                                <div className="bg" />
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg" />
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg" />
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}