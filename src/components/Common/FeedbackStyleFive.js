import React from 'react';

import Client1 from '../../assets/images/client-image/client1.jpg'
import Client2 from '../../assets/images/client-image/client2.jpg'
import Client3 from '../../assets/images/client-image/client3.jpg'

import Loadable from '@loadable/component'
import { Link } from 'gatsby';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: false,
    nav: false,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
};

const FeedbackStyleFive = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="agency-portfolio-feedback-area ptb-80">
            
            <div className="container">
            <div className="section-title">
                    <h2>Our Clients Feedback</h2>
                    <div className="bar"></div>
                    <p>Great work speaks for itself -- See what our clients have to say!</p>
                    <p></p>
                    <Link to="https://www.trustpilot.com/review/talismanwebs.com" target="_blank" className="btn btn-primary">
					    Leave A Review
				    </Link>
                </div>
                
                {display ? <OwlCarousel 
                    className="agency-portfolio-feedback-slides owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="agency-portfolio-feedback-item">
                        <div className="client-info">
                            <h3>Danielle Magee</h3>
                            <span>Friends of Rescue</span>
                        </div>
                        <p>I cannot recommend Talisman Webs enough. The team have worked so hard to build us our first website, nothing was ever a bother for them. Even when we were changing our minds about certain elements, they were happy to help change up whatever we needed. We were shown how to update the website and any questions we have are always answered quickly and with so much patience. We absolutely love our new website and honestly without the patience and dedication of Talisman Webs I dont think we would ever have gotten it up an running.</p>
                    </div>

                    <div className="agency-portfolio-feedback-item">
                        <div className="client-info">
                            <h3>Maxi Aranyi</h3>
                            <span>Shakes N' Bakes</span>
                        </div>
                        <p>Talisman Webs has built us a very professional and efficient website for our company. Integrated it with delivery services which run extremely smoothly. Scott not only has met our deadline requirement, but managed to compete it well in advance, allowing us to work with him to perfect it before the launch.</p>
                    </div>

                    <div className="agency-portfolio-feedback-item">
                        <div className="client-info">
                            <h3>Tom West</h3>
                            <span>Twig Services</span>
                        </div>
                        <p>Twig Services has been trading for 6 years and maintaining a website through various third parties has always been troublesome, time-consuming and costly at best! We are over the moon with the new content and features which have all been accomplished in lightning fast time and with minimal hassle, where Scott seemed to know exactly what we would want and need! We can now concentrate for the first time knowing that our brand is loved and cherished and is continually being worked on proactively!</p>
                    </div>
                    
                </OwlCarousel> : ''}
            </div>
            
        </div>
    )
}

export default FeedbackStyleFive;  