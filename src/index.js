import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceworker";

import "./assets/style.css";
import "./assets/animate.css";
import "./assets/themify-icon/themify-icons.css";
import "./assets/elagent/style.css"
import "./assets/font-awesome/css/all.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";


const loader = document.querySelector('#loader');
const showLoader = () => loader.classList.remove('loader--hide')
const hideLoader = () => loader.classList.add('loader--hide')

setTimeout(() =>
  ReactDOM.render(<App hideLoader={hideLoader} showLoader={showLoader} />, document.getElementById('root')), 1000);

serviceWorker.unregister();
