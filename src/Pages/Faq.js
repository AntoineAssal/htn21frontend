import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FaqSection from '../components/FaqSection';

const Faq = () => {
    return(
        <div className="body_wrapper">
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="banner_bg.png" Ptitle="FAQ" Pdescription="blablabla questions about our product and doggos!!"/>
            <FaqSection/>
        </div>
    )
}
export default Faq;