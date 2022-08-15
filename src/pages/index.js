import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as Icon from "react-feather"
import Loadable from "@loadable/component"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/Common/MainBanner"
import Features from "../components/Common/Features"
import ServicesArea from "../components/Common/ServicesArea"
import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import RecentWorks from "../components/Common/RecentWorks"
import PricingStyleOne from "../components/PricingPlans/PricingStyleOne"
import Feedback from "../components/Common/Feedback"
import Footer from "../components/_App/Footer"


// Shape Images
import Shape2 from '../assets/images/shape2.svg'
import Shape4 from '../assets/images/shape4.svg'
import FeedbackStyleFive from "../components/Common/FeedbackStyleFive"

const OwlCarousel = Loadable(() => import("react-owl-carousel3"))

const options = {
  items: 1,
  loop: true,
  nav: false,
  autoplay: true,
  margin: 30,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1200: {
      items: 1,
    },
    1500: {
      items: 1,
    },
  },
}

const IndexPage = props => {
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    setDisplay(true)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Navbar />
      <MainBanner />
      <Features />
      <ServicesArea />
      {/* <FunFactsArea /> */}
      {/* <Team /> */}
      <div className="works-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Works</h2>
            <div className="bar"></div>
            <p>
            Some of the most recent projects to join the Talisman Webs
              portfolio.
            </p>
          </div>
          <div className="row justify-content-center">
            {props.data.allContentfulPortfolio.edges.map(item => (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link to ={item.node.url} target="_blank">
                      <GatsbyImage
                        image={item.node.projectImage.gatsbyImageData}
                        alt="Image"
                        width="320"
                        height="170"
                      />
                    </Link>
                  </div>

                  <div className="works-content">
                    <h3>
                      <Link to={item.node.url}>
                        {item.node.title}
                      </Link>
                    </h3>
                    <p>
                     {item.node.description.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PricingStyleOne />
      <FeedbackStyleFive />
{/*       <div className="blog-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>The News from Our Blog</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-content-center">
            {props.data.allContentfulBlogs.edges.map(post => (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link to={`/blog-post/${post.node.slug}`}>
                      <GatsbyImage
                        image={post.node.featureImage.gatsbyImageData}
                        alt="Image"
                        width="320"
                        height="170"
                      />
                    </Link>

                    <div className="date">
                      <Icon.Calendar /> {post.node.createdAt}
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <h3>
                      <Link to={`/blog-post/${post.node.slug}`}>
                        {post.node.title}
                      </Link>
                    </h3>

                    <span>
                      By <Link>Scott Montford</Link>
                    </span>

                    <p>{post.node.description.description}</p>

                    <Link
                      to={`/blog-post/${post.node.slug}`}
                      className="read-more-btn"
                    >
                      Read More <Icon.ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    allContentfulBlogs {
      edges {
        node {
          title
          slug
          node_locale
          featureImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              formats: WEBP
            )
          }
          description {
            description
          }
          createdAt(formatString: "DD/MM/YYYY")
        }
      }
    }
    allContentfulPortfolio {
      edges {
        node {
          title
          projectImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              formats: WEBP
            )
          }
          description {
            description
          }
          url
          createdAt(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`

export default IndexPage
