import React from 'react';
import { Link } from "gatsby";

// Shape Images
import Shape1 from "../../assets/images/shape2.svg";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape4.svg";
import Shape4 from "../../assets/images/shape4.svg";

const PricingStyleOne = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Website Plans</h2>
                    <div className="bar"></div>
                    <p>All prices below are One-Time development fees. Web hosting is included & managed by us for £6/Month (or £60/Year).</p>
                    <p></p>
                    <p>The prices below do not include any monthly/yearly costs from features clients may want added during the development process.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Landing Page</h3>
                                <p>Perfect for service-based businesses or informational websites.</p>
                            </div>

                            <div className="content">
                                <div className="price">
                                    <span><sup>From £</sup>360 <span>One Time</span></span>
                                    <div className="subprice">
                                        <span>+£6<span>/Month (or £60/Year)</span></span>*
                                    </div>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">Web Hosting</li>
                                        <li className="active">Domain Registration</li>
                                        <li className="active">Analytics</li>
                                        <li className="active">Appointment Booking</li>
                                        <li className="active">Live Chat</li>
                                        <li className="active">Content Management System (CMS)</li>
                                        <li className="active">Website Backups</li>
                                    </ul>
                                    
                                </div>
                                * Monthly/Yearly costs will not be active until the website is completed & live.
                                <div className="price"> </div>
                                
                                <div className="pricing-footer">
                                    <Link to="/login" className="btn btn-primary">
                                        Select Plan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table active-plan">
                            <div className="pricing-header">
                                <h3>E-Commerce</h3>
                                <p>Perfect for any business that sells products online.</p>
                            </div>
                            
                            <div className="content">
                                <div className="price">
                                    <span><sup>From £</sup>750 <span>One Time</span></span>
                                    <div className="subprice">
                                        <span>+£12<span>/Month (or £132/Year)</span></span>*
                                    </div>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">Web Hosting</li>
                                        <li className="active">Domain Registration</li>
                                        <li className="active">Analytics + Sales Dashboard</li>
                                        <li className="active">Mobile App Store Manager</li>
                                        <li className="active">Built-in Inventory Management</li>
                                        <li className="active">Tax + Shipping Cost system</li>
                                        <li className="active">Discounts + Voucher System</li>
                                        <li className="active">Multi-Channel Sales</li>
                                        <li className="active">And So Much More...</li>
                                    </ul>
                                </div>
                                * Monthly/Yearly costs will not be active until the website is completed & live.
                                <div className="price"> </div>
                                
                                <div className="pricing-footer">
                                    <Link to="/login" className="btn btn-primary">
                                        Select Plan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Custom Websites</h3>
                                <p>For any sites that doesn't fall into the <strong>Landing Page</strong> or <strong>E-Commerce</strong> categories.</p>
                            </div>
                            
                            <div className="content">
                                <div className="price">
                                    <span><sup></sup>Get in Touch <span></span></span>
                                </div>
                                
                                <div className="pricing-features">
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link to="/login" className="btn btn-primary">
                                        Select Plan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape8 rotateme">
                <img src={Shape1} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape3} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
        </div>
    );
    
}

export default PricingStyleOne;
