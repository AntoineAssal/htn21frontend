import React from 'react';

const FaqSection = () => {
    return (
        <section className="faq_area bg_color sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pr_50">
                        <div className="faq_tab">
                            <h4 className="f_p t_color3 f_600 f_size_22 mb_40">Quick Navigation</h4>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="purchas-tab" data-toggle="tab" href="#purchas" role="tab" aria-controls="purchas" aria-selected="true">GoodBoy Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="returns-tab" data-toggle="tab" href="#returns" role="tab" aria-controls="returns" aria-selected="false">Privacy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="price-tab" data-toggle="tab" href="#price" role="tab" aria-controls="price" aria-selected="false">Dog training</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="care-tab" data-toggle="tab" href="#care" role="tab" aria-controls="care" aria-selected="false">Fun Facts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tab-content faq_content" id="myTabContent">
                            <div className="tab-pane fade show active" id="purchas" role="tabpanel" aria-labelledby="purchas-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">How to something</h3>
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                   Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Some Question here??<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Some Question here? Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingfour">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingfive">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20 mt_100">How to something else</h3>
                                <div id="accordion2">
                                    <div className="card">
                                        <div className="card-header" id="headingsix">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsesix" className="collapse" aria-labelledby="headingsix" data-parent="#accordion2">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingseven">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseseven" className="collapse" aria-labelledby="headingseven" data-parent="#accordion2">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingeight">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseeight" className="collapse" aria-labelledby="headingeight" data-parent="#accordion2">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingnine">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapsenine" className="collapse" aria-labelledby="headingnine" data-parent="#accordion2">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="returns" role="tabpanel" aria-labelledby="returns-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">How to purchase</h3>
                                <div id="accordion3">
                                    <div className="card">
                                        <div className="card-header" id="heading10">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse10" aria-expanded="true" aria-controls="collapse10">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse10" className="collapse show" aria-labelledby="heading10" data-parent="#accordion3">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading11">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse11" className="collapse" aria-labelledby="heading11" data-parent="#accordion3">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading12">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                Some Question here??<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse12" className="collapse" aria-labelledby="heading12" data-parent="#accordion3">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading13">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse13" className="collapse" aria-labelledby="heading13" data-parent="#accordion3">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading14">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse14" className="collapse" aria-labelledby="heading14" data-parent="#accordion3">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="price" role="tabpanel" aria-labelledby="price-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">How to purchase</h3>
                                <div id="accordion4">
                                    <div className="card">
                                        <div className="card-header" id="heading15">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse15" aria-expanded="true" aria-controls="collapse15">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse15" className="collapse show" aria-labelledby="heading15" data-parent="#accordion4">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading16">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse16" className="collapse" aria-labelledby="heading16" data-parent="#accordion4">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading17">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse17" className="collapse" aria-labelledby="heading17" data-parent="#accordion4">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading18">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse18" className="collapse" aria-labelledby="heading18" data-parent="#accordion4">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading19">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse19" className="collapse" aria-labelledby="heading19" data-parent="#accordion4">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20 mt_100">How to pay</h3>
                                <div id="accordion5">
                                    <div className="card">
                                        <div className="card-header" id="heading20">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse20" className="collapse" aria-labelledby="heading20" data-parent="#accordion5">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading21">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
                                                Some Question here??<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse21" className="collapse" aria-labelledby="heading21" data-parent="#accordion5">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading22">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse22" className="collapse" aria-labelledby="heading22" data-parent="#accordion5">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading23">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse23" aria-expanded="false" aria-controls="collapse23">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse23" className="collapse" aria-labelledby="heading23" data-parent="#accordion5">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="care" role="tabpanel" aria-labelledby="care-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">How to purchase</h3>
                                <div id="accordion6">
                                    <div className="card">
                                        <div className="card-header" id="heading24">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse24" aria-expanded="true" aria-controls="collapse24">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse24" className="collapse show" aria-labelledby="heading24" data-parent="#accordion6">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading25">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse25" className="collapse" aria-labelledby="heading25" data-parent="#accordion6">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading26">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse26" className="collapse" aria-labelledby="heading26" data-parent="#accordion6">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading27">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse27" aria-expanded="false" aria-controls="collapse27">
                                                Some Question here??<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse27" className="collapse" aria-labelledby="heading27" data-parent="#accordion6">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading28">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse28" aria-expanded="false" aria-controls="collapse28">
                                                Some Question here?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse28" className="collapse" aria-labelledby="heading28" data-parent="#accordion6">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FaqSection;