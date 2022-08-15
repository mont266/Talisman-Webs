import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import BlogSidebar from '../components/Blog/BlogSidebar';

import BlogDetailsImg from "../assets/images/blog-image/blog-details.jpg";
import BlogImg2 from "../assets/images/blog-image/blog2.jpg";
import BlogImg3 from "../assets/images/blog-image/blog3.jpg";
import BlogImg7 from "../assets/images/blog-image/blog7.jpg";
import BlogImg8 from "../assets/images/blog-image/blog8.jpg";
import BlogImg9 from "../assets/images/blog-image/blog9.jpg";


const BlogDetails = (props) => {

    return (
<Layout>
        <SEO title="Blog Details" /> 

        <Navbar />

        <PageBanner pageTitle="Blog Details" /> 

        <div className="blog-details-area ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-details-desc">
                            <div className="article-image">
                                <img src={BlogDetailsImg} alt="image" />
                            </div>

                            <div className="article-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <Icon.Clock /> September 31, 2021
                                        </li>
                                        <li>
                                            <Icon.User /> <Link to="#">Steven Smith</Link>
                                        </li>
                                    </ul>
                                </div>

                                <h2>The security risks of changing package owners</h2> 

                                <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </Layout>
    )
}

export default BlogDetails;