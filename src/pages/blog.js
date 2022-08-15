import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import * as Icon from "react-feather"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const BlogList = props => {
  
  return (
    <Layout>
      <SEO title="Blog" />

      <Navbar />

      <PageBanner pageTitle="Blog" />

      <div className="blog-area ptb-80">
        <div className="container">
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
                      <Link to={`/blog-post/${post.node.slug}`}>{post.node.title}</Link>
                    </h3>

                    <span>
                      By <Link>Scott Montford</Link>
                    </span>

                    <p>{post.node.description.description}</p>

                    <Link to={`/blog-post/${post.node.slug}`} className="read-more-btn">
                      Read More <Icon.ArrowRight />
                    </Link>
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
  query BlogPosts {
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
  }
`

export default BlogList
