import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import * as Icon from 'react-feather';

import TeamImg1 from "../assets/images/team-image/team1.jpg";
import TeamImg2 from "../assets/images/team-image/team2.jpg";
import TeamImg3 from "../assets/images/team-image/team3.jpg";
import TeamImg4 from "../assets/images/team-image/team4.jpg";

const Team = () => (
    <Layout>
        <SEO title="Team" /> 

        <Navbar />

        <PageBanner pageTitle="Team" />

        <div className="team-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={TeamImg1} alt="team image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Scott Montford</h3>
                                    <span>Founder & Web Developer</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={TeamImg2} alt="team image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Jamie Neill</h3>
                                    <span>Web Developer</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={TeamImg3} alt="team image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Luke O'Kane</h3>
                                    <span>Web Developer</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={TeamImg4} alt="team image" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Jason Statham</h3>
                                    <span>UX/UI Designer</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </Layout>
)

export default Team;