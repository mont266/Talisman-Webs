import React from 'react';
import { Link } from "gatsby";

// Shape Images
import Shape2 from "../../assets/images/shape2.svg";
import Shape4 from "../../assets/images/shape4.svg";

const PricingStyleTwo = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>SEO Audit Pricing</h2>
                    <div className="bar"></div>
                    <p>Our SEO Audits are the highest quality tool to increasing the traffic to your existing website.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <i className="flaticon-data"></i>
                                <h3>Basic SEO Audit</h3>
                            </div>
                            
                            <div className="price">
                                <span><sup>£</sup>35<span></span></span>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> PageSpeed Ranking</li>
                                    <li><i data-feather="check"></i> Indexing Problems Report</li>
                                    <li><i data-feather="check"></i> Backlinks Report</li>
                                    <li><i data-feather="check"></i> Images Report</li>
                                    <li><i data-feather="check"></i> Site Redirects Report</li>
                                    <li><i data-feather="check"></i> Meta Tags Report</li>
                                    <li><i data-feather="check"></i> Conclusion & Opportunities</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link to="https://checkoutpage.co/c/talismanwebs/basic-seo-audit" className="btn btn-primary cp-button">
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table active-plan">
                            <div className="pricing-header">
                                <i className="flaticon-cloud"></i>
                                <h3>Advanced SEO Audit</h3>
                            </div>
                            
                            <div className="price">
                                <span><sup>£</sup>65<span></span></span>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> Everything in the Basic Audit</li>
                                    <li><i data-feather="check"></i> Spelling & Grammar Report</li>
                                    <li><i data-feather="check"></i> Broken Links Report</li>
                                    <li><i data-feather="check"></i> Mobile Friendly Report</li>
                                    <li><i data-feather="check"></i> Toxic Links Report</li>
                                    <li><i data-feather="check"></i> Onpage Fundamentals Report</li>
                                    <li><i data-feather="check"></i> Website Architecture Report</li>
                                    <li><i data-feather="check"></i> Content Analysis Report</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link to="https://checkoutpage.co/c/talismanwebs/advanced-seo-audit" className="btn btn-primary cp-button">
                                    Buy Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div> 
        </div>
    );
}

export default PricingStyleTwo;
