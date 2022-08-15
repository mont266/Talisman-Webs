import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Portfolio = props => {
  return (
    <Layout>
      <SEO title="Portfolio" />

      <Navbar />

      <PageBanner pageTitle="Portfolio" />
      <strong><p align="center">Click On / Hover Over images to view more detail.</p></strong>
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
          
            {props.data.allContentfulPortfolio.edges.map(item => (
              <div className="col-lg-4 col-md-6">
                
                <div className="single-works">
                <GatsbyImage
                        image={item.node.projectImage.gatsbyImageData}
                        alt="Image"
                        width="320"
                        height="170"
                      />

                  <div className="works-content">
                    <h3>
                      <Link to={item.node.url} target="_blank">
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

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query Portfolio {
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

export default Portfolio
