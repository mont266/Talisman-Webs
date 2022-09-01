import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Team from "../components/Common/Team";
import FunFactsArea from "../components/Common/FunFactsArea";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import FeedbackStyleFive from '../components/Common/FeedbackStyleFive';

import AboutImg from "../assets/images/about4.png";
import { Link } from "gatsby";

const About2 = () => (
    <Layout>
        <SEO title="About Us" /> 

        <Navbar />

        <PageBanner pageTitle="About Us" />

        <div className="about-area ptb-80">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="ml-about-img">
                            <img src={AboutImg} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="ml-about-content">
                            <span className="sub-title">About Us</span>
                            <h2>Giving local businesses the quality work they deserve.</h2>
                            <div className="bar"></div>

                            <p>For years, small businesses in the UK are constantly bombarded with spam emails and calls trying to sell them websites. The catch? The extortionate pricing.</p>

                            <p>Our goal is to increase the number of local businesses and charities that operate online, charge fair and transparent prices and deliver great quality work that they deserve.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="about-inner-area">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our History</h3>
                                <p>Started in 2019 and originally based in Portstewart, Talisman Webs is now a small but growing team of talented web developers based around the UK.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our Mission</h3>
                                <p>The web-development industry has a bad rep for overcharging, spamming businesses and not delivering quality work - We aim to change that. We are super transparent with our pricing structure and we work super closely with our clients to ensure they get the quality work that they've paid for.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Who We Are</h3>
                                <p>We are Talisman Webs - A digital web-development agency that aims to change the standard level of quality of online presence for small businesses around the UK.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Team />
        <FeedbackStyleFive />
        {/* <FunFactsArea /> */}

        <div className="contact-cta-box">
                    <h3>Have Any Questions About Us?</h3>
                    <p>Don't hesitate to contact us</p>

                    <Link to="/contact" className="btn btn-primary">
                        Contact Us
                    </Link>
                </div>
        
        <Footer />
    </Layout>
)

export default About2;
