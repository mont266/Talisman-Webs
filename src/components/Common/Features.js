import React from 'react';
import * as Icon from 'react-feather';
import { Link } from "gatsby";

const Features = () => {
    return (
        <div className="boxes-area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-3 col-sm-6">
						<div className="single-box">
							<div className="icon">
                                <Icon.Code />
							</div>

							<h3>
								<Link to="/feature-details">
									Web Development
								</Link>
							</h3>

							<p>We offer our website clients an affordable, hassle-free web hosting service to keep their website online 24/7.</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-box bg-f78acb">
							<div className="icon">
                                <Icon.ShoppingCart />
							</div>

							<h3>
								<Link to="/feature-details">
									E-Commerce Solutions
								</Link>
							</h3>

							<p>A fully-integrated E-Commerce platform with a user-friendly mobile app designed with clients in mind.</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-box bg-c679e3">
							<div className="icon">
                                <Icon.CheckCircle />
							</div>

							<h3>
								<Link to="/feature-details">
									SEO Audits
								</Link>
							</h3>

							<p>Already have a website but want to know what steps you can take to increase organic traffic? Our SEO Audits are perfect for you!</p>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-box bg-eb6b3d">
							<div className="icon">
                                <Icon.Monitor />
							</div>

							<h3>
								<Link to="/feature-details">
									Landing Pages
								</Link>
							</h3>

							<p>Our informational landing pages make it easier for your customers to see information about your business and to get in touch.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;
