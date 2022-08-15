import React from 'react';
import * as Icon from 'react-feather';

// Cloud Hosting Services Images
import BookSelf from "../../assets/images/services-right-image/book-self.png";
import Box from "../../assets/images/services-right-image/box.png";
import Chair from "../../assets/images/services-right-image/chair.png";
import Cloud from "../../assets/images/services-right-image/cloud.png";
import Cup from "../../assets/images/services-right-image/cup.png";
import FlowerTop from "../../assets/images/services-right-image/flower-top.png";
import HeadPhone from "../../assets/images/services-right-image/head-phone.png";
import Monitor from "../../assets/images/services-right-image/monitor.png";
import Mug from "../../assets/images/services-right-image/mug.png";
import Table from "../../assets/images/services-right-image/table.png";
import Tissue from "../../assets/images/services-right-image/tissue.png";
import WaterBottle from "../../assets/images/services-right-image/water-bottle.png";
import Wifi from "../../assets/images/services-right-image/wifi.png";
import CercleShape from "../../assets/images/services-right-image/cercle-shape.png";
import ServiceRightMainPic from "../../assets/images/services-right-image/service-right-main-pic.png"; 

// Design & Development Images
import BigMonitor from "../../assets/images/services-left-image/big-monitor.png";
import Creative from "../../assets/images/services-left-image/creative.png";
import Developer from "../../assets/images/services-left-image/developer.png";
import SmallMonitor from "../../assets/images/services-left-image/small-monitor.png";
import SmallTop from "../../assets/images/services-left-image/small-top.png";
import Target from "../../assets/images/services-left-image/target.png";
import ServiceLeftMainPic from "../../assets/images/services-left-image/service-left-main-pic.png";

const SingleFeatures = () => {
    return (
        <>
            <div className="services-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>Cloud Hosting Services</h2>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Database /> Cloud Databases
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Globe /> Website Hosting
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.File /> File Storage
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.TrendingUp /> Forex Trading
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Folder /> File Backups
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Monitor /> Remote Desktop
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Mail /> Email Servers
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Cloud /> Hybrid Cloud
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 services-right-image">
                        <img 
                                src={BookSelf}
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="book-self"
                            />
                           
                            <img 
                                src={Box}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="box"
                            />
                         
                            <img 
                                src={Chair}
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                alt="chair"
                            /> 
                            
                            <img 
                                src={Cloud}
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="cloud"
                            />
                   
                            <img 
                                src={Cup}
                                className="animate__animated animate__bounceIn animate__delay-0.2s" 
                                alt="cup"
                            />
               
                            <img 
                                src={FlowerTop}
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="flower"
                            />
                     
                            <img 
                                src={HeadPhone}
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="head-phone"
                            />
                  
                            <img 
                                src={Monitor}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="monitor"
                            />
                
                            <img 
                                src={Mug}
                                className="animate__animated animate__rotateIn animate__delay-0.2s" 
                                alt="mug"
                            />
           
                            <img 
                                src={Table}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="table"
                            />
                    
                            <img 
                                src={Tissue}
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="tissue"
                            />
                   
                            <img 
                                src={WaterBottle}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="water-bottle"
                            />
                
                            <img 
                                src={Wifi}
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="wifi"
                            />
                        
                            <img 
                                src={CercleShape}
                                className="bg-image rotateme" 
                                alt="shape"
                            />
                         
                            <img 
                                src={ServiceRightMainPic}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="main-pic"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-area ptb-80">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 services-left-image">
                        <img 
                                src={BigMonitor}
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="big-monitor"
                            />
            
                            <img 
                                src={Creative}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="creative"
                            />
    
                            <img 
                                src={Developer}
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                alt="developer"
                            />
                    
                            <img 
                                src={FlowerTop}
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="flower-top"
                            />
        
                            <img 
                                src={SmallMonitor}
                                className="animate__animated animate__bounceIn animate__delay-0.2s" 
                                alt="small-monitor"
                            />
                        
                            <img 
                                src={SmallTop}
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="small-top"
                            />
                
                            <img 
                                src={Table}
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="table"
                            />
            
                            <img 
                                src={Target}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="target"
                            />
                        
                            <img 
                                src={CercleShape}
                                className="bg-image rotateme" 
                                alt="shape"
                            />
           
                            <img 
                                src={ServiceLeftMainPic}
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="main-pic"
                            />
                        </div>

                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>Design & Development</h2>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Layout /> Responsive Design
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Code /> React Web Development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Smartphone /> Android Apps Development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Code /> Laravel Web Development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Smartphone /> iOS Apps Development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Percent /> UX/UI Design
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.ShoppingCart /> E-commerce Development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.CheckCircle /> Print Ready Design
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleFeatures;