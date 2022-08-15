import React from 'react';
import * as Icon from 'react-feather';

// Client Images
import Client1 from '../../assets/images/client-image/client1.jpg'
import Client2 from '../../assets/images/client-image/client2.jpg'
import Client3 from '../../assets/images/client-image/client3.jpg'

// Shape Images
import AgencyUser1 from "../../assets/images/agency-image/agency-user1.png";
import AgencyUser2 from "../../assets/images/agency-image/agency-user2.png";
import AgencyUser3 from "../../assets/images/agency-image/agency-user3.png";
import AgencyUser4 from "../../assets/images/agency-image/agency-user4.png";
import AgencyUser5 from "../../assets/images/agency-image/agency-user5.png";
import AgencyUser6 from "../../assets/images/agency-image/agency-user6.png";

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: false,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    items: 1,
    animateOut: 'fadeOut',
}

const FeedbackStyleThree = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="ml-feedback-area ptb-80">
            <div className="container">
                <div className="section-title st-fs-28">
                    <span className="sub-title">Testimonials</span>
                    <h2>Our Clients Feedback</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {display ? <OwlCarousel 
                    className="ml-feedback-slides owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="single-testimonials-item">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                        <div className="client-info">

                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>
                            <h3>Sarah Taylor</h3>
                            <span>CEO at Envato</span>

                        </div> 
                    </div>

                    <div className="single-testimonials-item">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                        <div className="client-info">
                            <img src={Client2} alt="image" />

                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>

                            <h3>Steven Smith</h3>
                            <span>CEO at Envato</span>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                        <div className="client-info">
                            <img src={Client3} alt="image" />

                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>

                            <h3>James Eva</h3>
                            <span>CEO at Envato</span>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>

            {/* Shape Images */}
            <div className="user-shape1">
                <img src={AgencyUser1} alt="shape" />
            </div>
            <div className="user-shape2">
                <img src={AgencyUser2} alt="shape" />
            </div>
            <div className="user-shape3">
                <img src={AgencyUser3} alt="shape" />
            </div>
            <div className="user-shape4">
                <img src={AgencyUser4} alt="shape" />
            </div>
            <div className="user-shape5">
                <img src={AgencyUser5} alt="shape" />
            </div>
            <div className="user-shape6">
                <img src={AgencyUser6} alt="shape" />
            </div>
        </div>
    );
}

export default FeedbackStyleThree;