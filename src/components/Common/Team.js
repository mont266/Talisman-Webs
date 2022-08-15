import React from 'react';
import * as Icon from 'react-feather';

import Team1 from '../../assets/images/team-image/team1.jpg'
import Team2 from '../../assets/images/team-image/team2.jpg'
import Team3 from '../../assets/images/team-image/team3.jpg'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    items: 5,
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        900: {
            items: 3
        },
        // 1200: {
        //     items: 4
        // },
/*         1500: {
            items: 5
        } */
    }
}

const Team = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="team-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Awesome Team</h2>
                    <div className="bar"></div>
                    <p>We are fortunate to have a team that are really passionate at what they do. Our team make sure that our clients are in the best hands.</p>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="team-slider owl-carousel owl-theme owl-theme-style"
                {...options}
            > 
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team1} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Scott Montford</h3>
                            <span>Founder & Web Developer</span>
                        </div>

                        {/* <ul>
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
                        </ul> */}
                    </div>
                </div>
            
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team2} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Jamie Neill</h3>
                            <span>Web Developer</span>
                        </div>

                    </div>
                </div>
    
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team3} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Luke O'Kane</h3>
                            <span>Web Developer</span>
                        </div>

                    </div>
                </div>
            
            </OwlCarousel> : ''}
        </div>
    )
}

export default Team;