import React, { Component } from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

class PricingStyleThree extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="pricing-area pb-50">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <span className="sub-title">Add-Ons</span>
                        <h2>Maintanence Packages</h2>
                        <div className="bar"></div>
                        <p>These are optional extras that can be added onto your website packages. These are added to the monthly/yearly charge of the live website.</p>
                        <p>__</p>
                        <strong><p> Note: All monthly/yearly costs will not be active until your site is finished & live.</p></strong>
                    </div>
                    
                    <div className="tab pricing-tab bg-color">
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                Monthly Plan
                            </li>
                            
                            <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                Yearly Plan <i data-feather="calendar"></i>
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>Low Maintanence Package</h3>
                                                <p>For low maintanence websites. <br /> Mostly landing pages.</p>
                                            </div>

                                            <div className="price">
                                                £10 <span>/Month</span>
                                            </div>

                                            <div className="buy-btn">
                                            </div>

                                            <ul className="pricing-features">
                                                <strong><li>1-2 Updates per month including the features below:</li></strong>
                                                <li></li>
                                                <li><Icon.Check /> Image Changes</li>
                                                <li><Icon.Check /> Text changes</li>
                                                <li><Icon.Check /> New pages added</li>
                                                <li><Icon.Check /> Generic styling changes</li>
                                                <li><Icon.Check /> New Features & Widgets added</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>Medium Maintanence Package</h3>
                                                <p>For websites that will need weekly attention. <br /> High traffic landing pages.</p>
                                            </div>

                                            <div className="price">
                                                £20 <span>/Month</span>
                                            </div>

                                            <div className="buy-btn">
                                            </div>

                                            <ul className="pricing-features">
                                                <strong><li>5-6 Updates per month including the features below:</li></strong>
                                                <li></li>
                                                <li><Icon.Check /> Image Changes</li>
                                                <li><Icon.Check /> Text changes</li>
                                                <li><Icon.Check /> New pages added</li>
                                                <li><Icon.Check /> Generic styling changes</li>
                                                <li><Icon.Check /> New Features & Widgets added</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>High Maintanence Package</h3>
                                                <p>For popular websites that need daily updates. <br /> Mostly popular E-Commerce shops. </p>
                                            </div>

                                            <div className="price">
                                                £35 <span>/Month</span>
                                            </div>

                                            <div className="buy-btn">
                                            </div>

                                            <ul className="pricing-features">
                                                <strong><li>Daily updates including the features below:</li></strong>
                                                <li></li>
                                                <li><Icon.Check /> Image Changes</li>
                                                <li><Icon.Check /> Text changes</li>
                                                <li><Icon.Check /> New pages added</li>
                                                <li><Icon.Check /> Generic styling changes</li>
                                                <li><Icon.Check /> New Features & Widgets added</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>Low Maintanence Package</h3>
                                                <p>For low maintanence websites. <br /> Mostly landing pages.</p>
                                            </div>

                                            <div className="price">
                                                £100 <span>/Year</span>
                                            </div>

                                            <div className="buy-btn">
                                            </div>

                                            <ul className="pricing-features">
                                                <strong><li>1-2 Updates per month including the features below:</li></strong>
                                                <li></li>
                                                <li><Icon.Check /> Image Changes</li>
                                                <li><Icon.Check /> Text changes</li>
                                                <li><Icon.Check /> New pages added</li>
                                                <li><Icon.Check /> Generic styling changes</li>
                                                <li><Icon.Check /> New Features & Widgets added</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>Medium Maintanence Package</h3>
                                                <p>For websites that will need weekly attention. <br /> High traffic landing pages.</p>
                                            </div>

                                            <div className="price">
                                                £200 <span>/Year</span>
                                            </div>

                                            <div className="buy-btn">
                                            </div>

                                            <ul className="pricing-features">
                                                <strong><li>5-6 Updates per month including the features below:</li></strong>
                                                <li></li>
                                                <li><Icon.Check /> Image Changes</li>
                                                <li><Icon.Check /> Text changes</li>
                                                <li><Icon.Check /> New pages added</li>
                                                <li><Icon.Check /> Generic styling changes</li>
                                                <li><Icon.Check /> New Features & Widgets added</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>High Maintanence Package</h3>
                                                <p>For popular websites that need daily updates. <br /> Mostly popular E-Commerce shops. </p>
                                            </div>

                                            <div className="price">
                                                £350 <span>/Year</span>
                                            </div>

                                            <div className="buy-btn">
                                            </div>

                                            <ul className="pricing-features">
                                                <strong><li>Daily updates including the features below:</li></strong>
                                                <li></li>
                                                <li><Icon.Check /> Image Changes</li>
                                                <li><Icon.Check /> Text changes</li>
                                                <li><Icon.Check /> New pages added</li>
                                                <li><Icon.Check /> Generic styling changes</li>
                                                <li><Icon.Check /> New Features & Widgets added</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PricingStyleThree;