import React from 'react';
import { Link } from "gatsby";
import Slider from "react-slick";
import * as Icon from 'react-feather';

import ClientImg1 from "../../assets/images/client-image/client1.jpg";
import ClientImg2 from "../../assets/images/client-image/client2.jpg";
import ClientImg3 from "../../assets/images/client-image/client3.jpg";
import ClientImg4 from "../../assets/images/client-image/client4.jpg";
import ClientImg5 from "../../assets/images/client-image/client5.jpg";

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="next-arrow slick-arrow"
            onClick={onClick}
        >
            <Icon.ArrowRight />
        </button>
    );
}
  
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button 
            className="prev-arrow slick-arrow"
            onClick={onClick}
        >
            <Icon.ArrowLeft />
        </button>
    );
}

class Feedback extends React.Component {
    state = {
        imagesSlider: null,
        thumbnailsSlider: null,
        oldSlide: 0,
        activeSlide: 0,
        activeSlide2: 0
    };
    
    componentDidMount() {
        this.setState({
            imagesSlider: this.slider1,
            thumbnailsSlider: this.slider2
        });
    }

    renderSliderFullContent = () => {
        return DEFAULT_PROPS.map(({name,profession,image,content}) => {
            return (
                <div key={name}>
                    <div className="item">
                        <div className="single-feedback">
                            <div className="client-img">
                                <img src={image} alt="image" />
                            </div>

                            <h3>{name}</h3>
                            <span>{profession}</span>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderSliderImages = () => {
        return DEFAULT_PROPS.map(({name, image}) => {
            return (
                <div key={name}>
                    <div className="item">
                        <div className="img-fill">
                            <img src={image} alt="client" />
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        const sliderSettings1 = {
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            fade: true,
            autoplay: true,
            draggable: true,
            asNavFor: this.state.thumbnailsSlider,
            draggable: false,
            arrows: false,
            nextArrow: false,
            prevArrow: false
        }
        
        const sliderSettings2 = {
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplay: true,
            centerMode: true,
            draggable: false,
            focusOnSelect: true,
            asNavFor: this.state.imagesSlider,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            beforeChange: (current, next) => this.setState({ oldSlide: current, activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current })
        }

        return (
            <section className="feedback-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>What users Saying</h2>
                        <div className="bar"></div>
                        <p>We pride ourselves on delivering above and beyond for our clients. Here is some of the things our clients have to say.</p>
                        <p>_____</p>
                        <Link to="https://www.trustpilot.com/review/talismanwebs.com" target="_blank" className="btn btn-primary">
					        Leave A Review
				        </Link>
                    </div>

                    <div className="feedback-slides">
                        <div className="client-feedback">
                            <div>
                                <Slider
                                    ref={slider => (this.slider1 = slider)}
                                    {...sliderSettings1}
                                >
                                    {
                                        this.renderSliderFullContent()
                                    }
                                </Slider>
                            </div>
                        </div>

                        <div className="client-thumbnails">
                            <div>
                                <Slider
                                    ref={slider => (this.slider2 = slider)}
                                    {...sliderSettings2}
                                >
                                    {
                                        this.renderSliderImages()
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Shape Images */}
                <div className="shape1">
                    <img src={Shape1} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={Shape2} alt="shape" />
                </div>
                <div className="shape3">
                    <img src={Shape3} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={Shape4} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={Shape4} alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src={Shape2} alt="shape" />
                </div>
                
            </section>
        );
    }
}

const DEFAULT_PROPS = [
    {
        name: 'Danielle Magee', 
        profession: 'Dedicated, Friendly Service',
        image: ClientImg1, 
        content: 'I cannot recommend Talisman Webs enough. The team have worked so hard to build us our first website, nothing was ever a bother for them. Even when we were changing our minds about certain elements, they were happy to help change up whatever we needed. We were shown how to update the website and any questions we have are always answered quickly and with so much patience. We absolutely love our new website and honestly without the patience and dedication of Talisman Webs I dont think we would ever have gotten it up an running.'
    },
    {
        name: 'Maxi', 
        profession: 'Professional and rapid, highly recommend!',
        image: ClientImg2, 
        content: 'Talisman Webs has built us a very professional and efficient website for our company. Integrated it with delivery services which run extremely smoothly. Scott not only has met our deadline requirement, but managed to compete it well in advance, allowing us to work with him to perfect it before the launch. He frequently updates the website with our products, current promotional discounts and notifies us with analytics such as the number of people visiting our website and which products our customers are most interested in. Couldnt recommend Talisman Webs enough, overall a very rapid and professional company which keeps its customers and the websites updated on a daily bases. Any requests Ive had regarding updates on the website were completed within 24 hours, couldnt get such customer service anywhere else. Wish Talisman Webs and Scott the best of luck in the future and looking forward to working alongside them in the very near future!'
    },
    {
        name: 'Twig Services', 
        profession: 'We want to keep Talisman Webs all to ourselves!',
        image: ClientImg3, 
        content: 'Twig Services has been trading for 6 years and maintaining a website through various third parties has always been troublesome, time-consuming and costly at best! We also had very bad experiences along the way and are bombarded on a daily basis which has left us sceptical about the industry sector on a whole in trying to sort out the wheat from the chaff! When a trusted advisor highly recommended them we thought we would hear what they had the say and loved everything we heard about making our website more user-friendly, engaging and having more of an SEO presence. We took the plunge and are over the moon with the new content and features which have all been accomplished in lightning fast time and with minimal hassle, where Scott in particular seemed to know exactly what we would want and need! We can now concentrate for the first time knowing that our brand is loved and cherished and is continually being worked on proactively!'
    },
    {
        name: 'Khurram Ali', 
        profession: '',
        image: ClientImg4, 
        content: 'Scott and his team have been great to work with. Any requests were dealt punctually and efficiently. The designing and coherence of our website is testament to these guys skills. With frequent communication for changes and updates, these guys are on the ball! Can’t recommend them enough. They are always happy to help'
    },
    {
        name: 'Anne Montford', 
        profession: '',
        image: ClientImg5, 
        content: 'quick , professional and keeps everything up to date'
    }
];

export default Feedback;
