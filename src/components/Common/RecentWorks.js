import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

// Work Images
import WorksImage1 from '../../assets/images/works-image/works-image1.jpg'
import WorksImage2 from '../../assets/images/works-image/works-image2.jpg'
import WorksImage3 from '../../assets/images/works-image/works-image3.jpg'
import WorksImage4 from '../../assets/images/works-image/works-image4.jpg'
import WorksImage5 from '../../assets/images/works-image/works-image5.jpg'

// Shape Images
import Shape2 from '../../assets/images/shape2.svg'
import Shape4 from '../../assets/images/shape4.svg'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
    margin:30,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
}

const RecentWorks = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="works-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Our Recent Works</h2>
                    <div className="bar"></div>
                    <p>Some of the most recent projects to join the Talisman Webs portfolio.</p>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="works-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="single-works">
                    <img src={WorksImage1} alt="image" />

                    <Link to="/project-details" className="icon">
                        <Icon.Settings />
                    </Link>

                    <div className="works-content">
                        <h3>
                            <Link to="/project-details">
                                Incredible infrastructure
                            </Link>
                        </h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
    
                <div className="single-works">
                    <img src={WorksImage2} alt="image" />

                    <Link to="/project-details" className="icon">
                        <Icon.Settings />
                    </Link>

                    <div className="works-content">
                        <h3>
                            <Link to="/project-details">
                                Email Notifications
                            </Link>
                        </h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
    
                <div className="single-works">
                    <img src={WorksImage3} alt="image" />

                    <Link to="/project-details" className="icon">
                        <Icon.Settings />
                    </Link>

                    <div className="works-content">
                        <h3>
                            <Link to="/project-details">
                                Best Analytics Audits
                            </Link>
                        </h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
        
                <div className="single-works">
                    <img src={WorksImage4} alt="image" />

                    <Link to="/project-details" className="icon">
                        <Icon.Settings />
                    </Link>

                    <div className="works-content">
                        <h3>
                            <Link to="/project-details">
                                Simple Dashboard
                            </Link>
                        </h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
    
                <div className="single-works">
                    <img src={WorksImage5} alt="image" />

                    <Link to="/project-details" className="icon">
                        <Icon.Settings />
                    </Link>
                    
                    <div className="works-content">
                        <h3>
                            <Link to="/project-details">Information Retrieval</Link>
                        </h3>
                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    </div>
                </div>
            </OwlCarousel> : ''}
            
            {/* Shape Images */}
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
        </div>
    )
}

export default RecentWorks;
