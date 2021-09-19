import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Items from '../components/Items';
const Process = () => {
    return(
        <div className="body_wrapper">
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="banner_bg.png" Ptitle="Our Process" Pdescription="oijepijep[fejkwpej] Explanation.!!"/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../img/divider.png')} alt=""/>
                        <Items rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Create your goodboy account" descriptions="You took the right first step."/>
                        <Items rowClass="row" aClass="pl_100" fimage="process_3.png" iImg="icon02.png" ftitle="Use our website to get matched with the perfect companion!" descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis. In nec risus nec metus mollis finibus aliquam in odio. Pellentesque in iaculis neque, ut accumsan lectus. Sed lacinia sapien at ligula tincidunt pellentesque. In laoreet tellus a lacus vestibulum iaculis." 
                        descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis. In nec risus nec metus mollis finibus aliquam in odio. Pellentesque in iaculis neque, ut accumsan lectus. Sed lacinia sapien at ligula tincidunt pellentesque. In laoreet tellus a lacus vestibulum iaculis."/>
                        <Items rowClass="row" aClass="pl_100" fimage="process_5.png" iImg="icon_04.png" ftitle="Let us help you make sure its a good boy!" 
                        descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis. In nec risus nec metus mollis finibus aliquam in odio. Pellentesque in iaculis neque, ut accumsan lectus. Sed lacinia sapien at ligula tincidunt pellentesque. In laoreet tellus a lacus vestibulum iaculis."/>
                        <Items rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_4.png" iImg="icon_05.png" ftitle="Spend more time with your doggo!" 
                        descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem laoreet dui ultrices iaculis. In nec risus nec metus mollis finibus aliquam in odio. Pellentesque in iaculis neque, ut accumsan lectus. Sed lacinia sapien at ligula tincidunt pellentesque. In laoreet tellus a lacus vestibulum iaculis."/>
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Process;