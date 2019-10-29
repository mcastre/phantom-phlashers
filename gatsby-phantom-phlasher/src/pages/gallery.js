import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import $ from "jquery"
import Lightbox from "react-image-lightbox"
import Carousel, { Modal, ModalGateway } from "react-images"
import "react-image-lightbox/style.css"
import GalerryCollege from "../images/gallery/Nov-2017-IPMS-Meeting/nov-2017-gallery-collage.png"
import JulyIPMS from "../images/gallery/Jul-2017-IPMS-Meeting/jul-2017-gallery-collage.png"
import JuneIPMS from "../images/gallery/Jun-2017-IPMS-Meeting/june-2017-gallery-collage.png"
import PhantomPhurball from "../images/gallery/Phantom-Phurball-2017/phantom-phurball-gallery-collage.png"

import Phantom1 from "../images/gallery/Phantom-Phurball-2017/IMG_5208.jpg"
import Phantom2 from "../images/gallery/Phantom-Phurball-2017/IMG_5209.jpg"
import Phantom3 from "../images/gallery/Phantom-Phurball-2017/IMG_5210.jpg"
import Phantom4 from "../images/gallery/Phantom-Phurball-2017/IMG_5214.jpg"
import Phantom5 from "../images/gallery/Phantom-Phurball-2017/IMG_5215.jpg"
import Phantom6 from "../images/gallery/Phantom-Phurball-2017/IMG_5216.jpg"
import Phantom7 from "../images/gallery/Phantom-Phurball-2017/IMG_5217.jpg"
import Phantom8 from "../images/gallery/Phantom-Phurball-2017/IMG_5218.jpg"
import Phantom9 from "../images/gallery/Phantom-Phurball-2017/IMG_5219.jpg"
import Phantom10 from "../images/gallery/Phantom-Phurball-2017/IMG_5220.jpg"
import Phantom11 from "../images/gallery/Phantom-Phurball-2017/IMG_5221.jpg"
import Phantom12 from "../images/gallery/Phantom-Phurball-2017/IMG_5222.jpg"
import Phantom13 from "../images/gallery/Phantom-Phurball-2017/IMG_5223.jpg"
import Phantom14 from "../images/gallery/Phantom-Phurball-2017/IMG_5224.jpg"
import Phantom15 from "../images/gallery/Phantom-Phurball-2017/IMG_5225.jpg"
import Phantom16 from "../images/gallery/Phantom-Phurball-2017/IMG_5226.jpg"
import Phantom17 from "../images/gallery/Phantom-Phurball-2017/IMG_5227.jpg"
import Phantom18 from "../images/gallery/Phantom-Phurball-2017/IMG_5228.jpg"
import Phantom19 from "../images/gallery/Phantom-Phurball-2017/IMG_5229.jpg"
import Phantom20 from "../images/gallery/Phantom-Phurball-2017/IMG_5240.jpg"
import Phantom21 from "../images/gallery/Phantom-Phurball-2017/IMG_5241.jpg"
import Phantom22 from "../images/gallery/Phantom-Phurball-2017/IMG_5242.jpg"
import Phantom23 from "../images/gallery/Phantom-Phurball-2017/IMG_5243.jpg"
import Phantom24 from "../images/gallery/Phantom-Phurball-2017/IMG_5244.jpg"
import Phantom25 from "../images/gallery/Phantom-Phurball-2017/IMG_5245.jpg"
import Phantom26 from "../images/gallery/Phantom-Phurball-2017/IMG_5246.jpg"
import Phantom27 from "../images/gallery/Phantom-Phurball-2017/IMG_5247.jpg"
import Phantom28 from "../images/gallery/Phantom-Phurball-2017/IMG_5251.jpg"
import Phantom29 from "../images/gallery/Phantom-Phurball-2017/IMG_5253.jpg"
import Phantom30 from "../images/gallery/Phantom-Phurball-2017/IMG_5254.jpg"
import Phantom31 from "../images/gallery/Phantom-Phurball-2017/IMG_5255.jpg"
import Phantom32 from "../images/gallery/Phantom-Phurball-2017/IMG_5256.jpg"
import Phantom33 from "../images/gallery/Phantom-Phurball-2017/IMG_5257.jpg"
import Phantom34 from "../images/gallery/Phantom-Phurball-2017/IMG_5262.jpg"
import Phantom35 from "../images/gallery/Phantom-Phurball-2017/IMG_5263.jpg"
import Phantom36 from "../images/gallery/Phantom-Phurball-2017/IMG_5264.jpg"
import Phantom37 from "../images/gallery/Phantom-Phurball-2017/IMG_5265.jpg"
import Phantom38 from "../images/gallery/Phantom-Phurball-2017/IMG_5266.jpg"
import Phantom39 from "../images/gallery/Phantom-Phurball-2017/IMG_5267.jpg"
import Phantom40 from "../images/gallery/Phantom-Phurball-2017/IMG_5268.jpg"
import Phantom41 from "../images/gallery/Phantom-Phurball-2017/IMG_5269.jpg"
import Phantom42 from "../images/gallery/Phantom-Phurball-2017/IMG_5270.jpg"
import Phantom43 from "../images/gallery/Phantom-Phurball-2017/IMG_5271.jpg"
import Phantom44 from "../images/gallery/Phantom-Phurball-2017/IMG_5272.jpg"
import Phantom45 from "../images/gallery/Phantom-Phurball-2017/IMG_5273.jpg"
import Phantom46 from "../images/gallery/Phantom-Phurball-2017/IMG_5276.jpg"
import Phantom47 from "../images/gallery/Phantom-Phurball-2017/IMG_5277.jpg"
import Phantom48 from "../images/gallery/Phantom-Phurball-2017/IMG_5278.jpg"
import Phantom49 from "../images/gallery/Phantom-Phurball-2017/IMG_5279.jpg"
import Phantom50 from "../images/gallery/Phantom-Phurball-2017/IMG_5280.jpg"

/* Try with react Images http://jossmac.github.io/react-images/#/ */
const phantomPhurballBox = [
  { src: Phantom1 },
  { src: Phantom2 },
  { src: Phantom3 },
  { src: Phantom4 },
  { src: Phantom5 },
  { src: Phantom6 },
  { src: Phantom7 },
  { src: Phantom8 },
  { src: Phantom9 },
  { src: Phantom10 },
  { src: Phantom11 },
  { src: Phantom12 },
  { src: Phantom13 },
  { src: Phantom14 },
  { src: Phantom15 },
  { src: Phantom16 },
  { src: Phantom17 },
  { src: Phantom18 },
  { src: Phantom19 },
  { src: Phantom20 },
  { src: Phantom21 },
  { src: Phantom22 },
  { src: Phantom23 },
  { src: Phantom24 },
  { src: Phantom25 },
  { src: Phantom26 },
  { src: Phantom27 },
  { src: Phantom28 },
  { src: Phantom29 },
  { src: Phantom30 },
  { src: Phantom31 },
  { src: Phantom32 },
  { src: Phantom33 },
  { src: Phantom34 },
  { src: Phantom35 },
  { src: Phantom36 },
  { src: Phantom37 },
  { src: Phantom38 },
  { src: Phantom39 },
  { src: Phantom40 },
  { src: Phantom41 },
  { src: Phantom42 },
  { src: Phantom43 },
  { src: Phantom44 },
  { src: Phantom45 },
  { src: Phantom46 },
  { src: Phantom47 },
  { src: Phantom48 },
  { src: Phantom49 },
  { src: Phantom50 },
]

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = { ModalIsOpen: false }
  }

  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }))
  }

  // bodyPageAnimation() {
  //   // Body / Page animations
  //   $("body").addClass("animated fadeIn")
  //   $("#notification").addClass("animated fadeIn")
  //   $("#hero").addClass("animated fadeIn")
  // }

  // toogleMobileNav() {
  //   // Toggle Mobile Nav
  //   $("#nav_toggle").click(function() {
  //     $(".primary-navigation").toggleClass("is-toggled")
  //   })
  // }

  // IpmsJune() {
  //   $("#ipms_june_2017_gal").click(function(e) {
  //     e.preventDefault()
  //     $.swipebox([
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5508.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5509.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5510.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5511.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5512.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5513.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5514.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5515.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5516.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5517.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5518.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5519.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5520.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5521.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5522.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5523.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5524.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5525.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5526.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5527.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5528.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5529.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //       {
  //         href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5530.jpg",
  //         title: "IPMS June 2017 Meeting",
  //       },
  //     ])
  //   })
  // }

  // IpmsJuly() {
  //   $("#ipms_jul_2017_gal").click(function() {
  //     $.swipebox([
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5587.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5588.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5589.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5590.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5591.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5592.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5593.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5594.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5595.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5596.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5597.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5598.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5599.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5600.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5601.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5602.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5603.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5604.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5605.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5606.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5607.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5608.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5609.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5610.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //       {
  //         href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5611.jpg",
  //         title: "IPMS July 2017 Meeting",
  //       },
  //     ])
  //   })
  // }

  // IpmsNov() {
  //   $("#ipms_nov_2017_gal").click(function() {
  //     $.swipebox([
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143357607.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143403260.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143416594.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143434922.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143459717.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144631238.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144638775.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144646761.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144702216.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144710617.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144715678.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144721760.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144732295.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144739411.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //       {
  //         href:
  //           "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_145335327.jpg",
  //         title: "IPMS Nov 2017 Meeting",
  //       },
  //     ])
  //   })
  // }

  render() {
    const { modalIsOpen } = this.state
    return (
      <Layout>
        <SEO title="Phantom phlashers IPMS - Brimingham - Alabama" />
        <div id="background_wrapper" className="full-background sky">
          <div className="overlay"></div>
          <main className="container">
            <Navbar />
            <section id="hero" className="hero-wrapper is-subpage">
              <div className="featured-image-message">
                <p className="featured-image-message-body">
                  Take a look at some of the pictures we've collected over the
                  years. Click on a gallery to view them.
                </p>
              </div>
              <ul className="cards">
                <li id="ipms_nov_2017_gal" className="card">
                  <h2 className="card-title">IPMS Nov 2017 Meeting</h2>
                  <div
                    className="card-featured-image"
                    style={{
                      backgroundImage: "url(" + GalerryCollege + ")",
                    }}
                  ></div>
                </li>
                <li id="ipms_jul_2017_gal" className="card">
                  <h2 className="card-title">IPMS July 2017 Meeting</h2>
                  <div
                    className="card-featured-image"
                    style={{ backgroundImage: "url(" + JulyIPMS + ")" }}
                  ></div>
                </li>
                <li id="ipms_june_2017_gal" className="card">
                  <h2 className="card-title">IPMS June 2017 Meeting</h2>
                  <div
                    className="card-featured-image"
                    style={{ backgroundImage: "url(" + JuneIPMS + ")" }}
                  ></div>
                </li>
                <li id="phantom_phurball_2017_gal" className="card">
                  <h2 className="card-title">Phantom Phurball 2017</h2>
                  <div
                    className="card-featured-image"
                    onClick={() => this.setState({ modalIsOpen: true })}
                    style={{ backgroundImage: "url(" + PhantomPhurball + ")" }}
                  ></div>
                  <ModalGateway>
                    {modalIsOpen ? (
                      <Modal
                        onClose={() => this.setState({ modalIsOpen: false })}
                      >
                        <Carousel views={phantomPhurballBox} />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </li>
              </ul>
            </section>
          </main>
        </div>
      </Layout>
    )
  }
}

export default Gallery
