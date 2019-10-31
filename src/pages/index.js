import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Diorama from "../images/diorama.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Phantom phlashers IPMS - Brimingham - Alabama" />
    <div id="background_wrapper" className="full-background sky is-cropped">
      <div className="overlay"></div>
      <main className="container">
        <Navbar />
        <section id="notification" className="alert-notification-wrapper">
          <div className="date-box">
            <p className="date-month">Oct</p>
            <p className="date-day">5</p>
          </div>
          <div className="notification-message">
            <p className="message-title">Next Phantom Phlashers meeting</p>
            <p className="message-body">
              1:30pm at{" "}
              <Link to="https://goo.gl/maps/EqnKa4BBVak" target="_blank">
                Homewood Public Library
              </Link>
            </p>
          </div>
        </section>
        <section id="hero" className="hero-wrapper">
          <div className="hero-message">
            <h1 className="hero-message-title">Welcome</h1>
            <p className="hero-message-body">
              We are a scale modeling club based out of Birmingham, Alabama and
              we welcome any scale modeler of any age or skill level! Come kick
              the tires, light the fires, and enjoy our online modeling
              resource!
            </p>
            <Link to="/about/" className="hero-cta-link">
              Learn more about the Phantom Phlashers{" "}
              <span className="arrow-link"></span>
            </Link>
          </div>
          <div className="hero-featured-image hide-for-small">
            <img
              src={Diorama}
              alt="Carl's Aircraft Diorama - Spit N' Polish"
              width="100%"
            />
          </div>
        </section>
        <div className="hero-featured-image show-for-small">
          <img
            src={Diorama}
            alt="Carl's Aircraft Diorama - Spit N' Polish"
            width="100%"
          />
        </div>
      </main>
      {/* <footer class="main-home-footer">
		<a href="index.html"><img src="images/Phantom-Phlashers-Logo-small.png" alt="Phantom Phlashers IPMS Logo" class="footer-slug" width="100%"></a>
		<p class="footer-copyright-info">Copyright 2017 Phantom Phlashers IPMS Birmingham &middot; All Rights Reserved</p>
	</footer> */}
    </div>
  </Layout>
)

export default IndexPage
