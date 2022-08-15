import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Facebook />
                            </div>
                            <h3>Facebook</h3>
                            <p><a href="https://www.facebook.com/TalismanWebs">TalismanWebs</a></p>
                            <a href="https://www.facebook.com/TalismanWebs" target="_blank"><button className="btn btn-primary">Message Us</button></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Twitter />
                            </div>
                            <h3>Twitter</h3>
                            <p><a href="https://twitter.com/talisman_webs">@talisman_webs</a></p>
                            <a href="https://twitter.com/talisman_webs" target="_blank"><button className="btn btn-primary">Message Us</button></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Instagram />
                            </div>
                            <h3>Instagram</h3>
                            <p><a href="https://www.instagram.com/talismanwebs/">@TalismanWebs</a></p>
                            <a href="https://www.instagram.com/talismanwebs/" target="_blank"><button className="btn btn-primary">Message Us</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;  