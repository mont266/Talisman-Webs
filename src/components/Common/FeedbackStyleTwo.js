import React from 'react';


// Client Images
import Client1 from '../../assets/images/client-image/client1.jpg';
import Client2 from '../../assets/images/client-image/client2.jpg';
import Client3 from '../../assets/images/client-image/client3.jpg';

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape4 from "../../assets/images/shape4.svg";
import Shape5 from "../../assets/images/shape5.png";

import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
    loop: false,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    items: 1,
}

const FeedbackStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>What users Saying</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-feedback-item">
                        <div className="client-info align-items-center">

                            <div className="title">
                                <h3>Danielle Magee</h3>
                                <span>Friends of Rescue</span>
                            </div>
                        </div>

                        <p>I cannot recommend Talisman Webs enough. The team have worked so hard to build us our first website, nothing was ever a bother for them. Even when we were changing our minds about certain elements, they were happy to help change up whatever we needed. We were shown how to update the website and any questions we have are always answered quickly and with so much patience. We absolutely love our new website and honestly without the patience and dedication of Talisman Webs I dont think we would ever have gotten it up an running.</p>
                    </div>

                    <div className="single-feedback-item">
                        <div className="client-info align-items-center">

                            <div className="title">
                                <h3>Maxi</h3>
                                <span>Shakes N' Bakes Belfast</span>
                            </div>
                        </div>

                        <p>Talisman Webs has built us a very professional and efficient website for our company. Integrated it with delivery services which run extremely smoothly. Scott not only has met our deadline requirement, but managed to compete it well in advance, allowing us to work with him to perfect it before the launch. </p>
                    </div>

                    <div className="single-feedback-item">
                        <div className="client-info align-items-center">
                            <div className="title">
                                <h3>Tom West</h3>
                                <span>Twig Services</span>
                            </div>
                        </div>
                        <p>Twig Services has been trading for 6 years and maintaining a website through various third parties has always been troublesome, time-consuming and costly at best! We are over the moon with the new content and features which have all been accomplished in lightning fast time and with minimal hassle, where Scott seemed to know exactly what we would want and need! We can now concentrate for the first time knowing that our brand is loved and cherished and is continually being worked on proactively!</p>
                    </div>
                </OwlCarousel> : ''}
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src={Shape1} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape5">
                <img src={Shape5} alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
        </div>
    );
}

export default FeedbackStyleTwo;
