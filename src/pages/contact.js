import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import FacebookIcon from "../images/contact-facebook-icon.svg"
import ADGZ from "../images/ADGZ-scratchbuilt.png"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Phantom phlashers IPMS - Brimingham - Alabama" />
      <div
        id="background_wrapper"
        className="full-background sky is-cropped is-full-height"
      >
        <div className="overlay"></div>
        <div className="container">
          <Navbar />

          <section className="featured-image-wrapper">
            <div id="featured_image_message" className="featured-image-message">
              <p className="featured-image-message-body">
                If you have any questions about our club, please email us{" "}
                <a href="mailto:phantomphocus@gmail.com">here.</a>
                Or, if you have any questions about the website, or to report an
                issue, please{" "}
                <a href="mailto:mcastre3@gmail.com">email the webmaster.</a>
              </p>
              <p className="featured-image-message-body">
                Also, be sure to visit our Facebook page!{" "}
                <a
                  href="https://www.facebook.com/Phantom-Phlashers-111867315510781/"
                  target="_blank"
                >
                  <img src={FacebookIcon} alt="Facebook" />
                </a>
              </p>
            </div>
            <div id="main_featured_image" className="main-featured-image">
              <img
                src={ADGZ}
                alt="ADGZ-scratchbuilt"
                title="ADGZ scratchbuilt"
                width="100%"
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
