import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

import Logo from '../../assets/images/logo.png'
import MapImg from '../../assets/images/map.png'
import Shape1 from '../../assets/images/shape1.png'
import Shape2 from '../../assets/images/shape2.svg'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Logo} alt="logo" />
                                </Link>
                            </div>
                            <p>Shaping the digital presence of small businesses at affordable rates. One step at a time.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>
                            <ul className="list">
                                <li>
                                    <Link to="/about">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pricing">
                                        Our Pricing
                                    </Link>
                                </li>
{/*                                 <li>
                                    <Link to="/blog">
                                        Blog
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">
                                <li>
                                    <Link to="https://talismanwebs.hipporello.net/desk" target="_blank">
                                        Submit a Ticket
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">
                                        Terms & Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            {/* <h3>Address</h3>
                            
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    27 Division St, New York, <br /> NY 10002, USA
                                </li>
                                <li>
                                    <Icon.Mail />
                                    Email: <Link to="mailto:spet@gmail.com">spet@gmail.com</Link>
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <Link to="tel:321984754">+ (321) 984 754</Link>
                                </li>
                            </ul> */}

                            <ul className="social-links">
                                <li>
                                    <a href="https://www.facebook.com/TalismanWebs/" className="facebook" target="_blank" rel="noreferrer"><Icon.Facebook /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/talisman_webs" className="twitter" target="_blank" rel="noreferrer"><Icon.Twitter /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/talismanwebs/" className="instagram" target="_blank" rel="noreferrer"><Icon.Instagram /></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/talisman-webs" className="linkedin" target="_blank" rel="noreferrer"><Icon.Linkedin /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} Talisman Webs.</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={MapImg} className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src={Shape1} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 