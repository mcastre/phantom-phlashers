import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Carousel, { Modal, ModalGateway } from "react-images"
import $ from "jquery"
import GalerryCollege from "../images/gallery/Nov-2017-IPMS-Meeting/nov-2017-gallery-collage.png"
import JulyIPMS from "../images/gallery/Jul-2017-IPMS-Meeting/jul-2017-gallery-collage.png"
import JuneIPMS from "../images/gallery/Jun-2017-IPMS-Meeting/june-2017-gallery-collage.png"
import PhantomPhurball from "../images/gallery/Phantom-Phurball-2017/phantom-phurball-gallery-collage.png"

// Images source

import phantom1 from "../images/gallery/Phantom-Phurball-2017/IMG_5208.jpg"
import phantom2 from "../images/gallery/Phantom-Phurball-2017/IMG_5209.jpg"
import phantom3 from "../images/gallery/Phantom-Phurball-2017/IMG_5210.jpg"
import phantom4 from "../images/gallery/Phantom-Phurball-2017/IMG_5214.jpg"
import phantom5 from "../images/gallery/Phantom-Phurball-2017/IMG_5215.jpg"
import phantom6 from "../images/gallery/Phantom-Phurball-2017/IMG_5216.jpg"
import phantom7 from "../images/gallery/Phantom-Phurball-2017/IMG_5217.jpg"
import phantom8 from "../images/gallery/Phantom-Phurball-2017/IMG_5218.jpg"
import phantom9 from "../images/gallery/Phantom-Phurball-2017/IMG_5219.jpg"
import phantom10 from "../images/gallery/Phantom-Phurball-2017/IMG_5220.jpg"
import phantom11 from "../images/gallery/Phantom-Phurball-2017/IMG_5221.jpg"
import phantom12 from "../images/gallery/Phantom-Phurball-2017/IMG_5222.jpg"
import phantom13 from "../images/gallery/Phantom-Phurball-2017/IMG_5223.jpg"
import phantom14 from "../images/gallery/Phantom-Phurball-2017/IMG_5224.jpg"
import phantom15 from "../images/gallery/Phantom-Phurball-2017/IMG_5225.jpg"
import phantom16 from "../images/gallery/Phantom-Phurball-2017/IMG_5226.jpg"
import phantom17 from "../images/gallery/Phantom-Phurball-2017/IMG_5227.jpg"
import phantom18 from "../images/gallery/Phantom-Phurball-2017/IMG_5228.jpg"
import phantom19 from "../images/gallery/Phantom-Phurball-2017/IMG_5229.jpg"
import phantom20 from "../images/gallery/Phantom-Phurball-2017/IMG_5240.jpg"
import phantom21 from "../images/gallery/Phantom-Phurball-2017/IMG_5241.jpg"
import phantom22 from "../images/gallery/Phantom-Phurball-2017/IMG_5242.jpg"
import phantom23 from "../images/gallery/Phantom-Phurball-2017/IMG_5243.jpg"
import phantom24 from "../images/gallery/Phantom-Phurball-2017/IMG_5244.jpg"
import phantom25 from "../images/gallery/Phantom-Phurball-2017/IMG_5245.jpg"
import phantom26 from "../images/gallery/Phantom-Phurball-2017/IMG_5246.jpg"
import phantom27 from "../images/gallery/Phantom-Phurball-2017/IMG_5247.jpg"
import phantom28 from "../images/gallery/Phantom-Phurball-2017/IMG_5251.jpg"
import phantom29 from "../images/gallery/Phantom-Phurball-2017/IMG_5253.jpg"
import phantom30 from "../images/gallery/Phantom-Phurball-2017/IMG_5254.jpg"
import phantom31 from "../images/gallery/Phantom-Phurball-2017/IMG_5255.jpg"
import phantom32 from "../images/gallery/Phantom-Phurball-2017/IMG_5256.jpg"
import phantom33 from "../images/gallery/Phantom-Phurball-2017/IMG_5257.jpg"
import phantom34 from "../images/gallery/Phantom-Phurball-2017/IMG_5262.jpg"
import phantom35 from "../images/gallery/Phantom-Phurball-2017/IMG_5263.jpg"
import phantom36 from "../images/gallery/Phantom-Phurball-2017/IMG_5264.jpg"
import phantom37 from "../images/gallery/Phantom-Phurball-2017/IMG_5265.jpg"
import phantom38 from "../images/gallery/Phantom-Phurball-2017/IMG_5266.jpg"
import phantom39 from "../images/gallery/Phantom-Phurball-2017/IMG_5267.jpg"
import phantom40 from "../images/gallery/Phantom-Phurball-2017/IMG_5268.jpg"
import phantom41 from "../images/gallery/Phantom-Phurball-2017/IMG_5269.jpg"
import phantom42 from "../images/gallery/Phantom-Phurball-2017/IMG_5270.jpg"
import phantom43 from "../images/gallery/Phantom-Phurball-2017/IMG_5271.jpg"
import phantom44 from "../images/gallery/Phantom-Phurball-2017/IMG_5272.jpg"
import phantom45 from "../images/gallery/Phantom-Phurball-2017/IMG_5273.jpg"
import phantom46 from "../images/gallery/Phantom-Phurball-2017/IMG_5276.jpg"
import phantom47 from "../images/gallery/Phantom-Phurball-2017/IMG_5277.jpg"
import phantom48 from "../images/gallery/Phantom-Phurball-2017/IMG_5278.jpg"
import phantom49 from "../images/gallery/Phantom-Phurball-2017/IMG_5279.jpg"
import phantom50 from "../images/gallery/Phantom-Phurball-2017/IMG_5280.jpg"

import ipms1 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5508.jpg"
import ipms2 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5509.jpg"
import ipms3 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5510.jpg"
import ipms4 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5511.jpg"
import ipms5 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5512.jpg"
import ipms6 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5513.jpg"
import ipms7 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5514.jpg"
import ipms8 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5515.jpg"
import ipms9 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5516.jpg"
import ipms10 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5517.jpg"
import ipms11 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5518.jpg"
import ipms12 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5519.jpg"
import ipms13 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5520.jpg"
import ipms14 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5521.jpg"
import ipms15 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5522.jpg"
import ipms16 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5523.jpg"
import ipms17 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5524.jpg"
import ipms18 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5525.jpg"
import ipms19 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5526.jpg"
import ipms20 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5527.jpg"
import ipms21 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5528.jpg"
import ipms22 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5529.jpg"
import ipms23 from "../images/gallery/Jun-2017-IPMS-Meeting/IMG_5530.jpg"

import jul1 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5587.jpg"
import jul2 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5588.jpg"
import jul3 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5589.jpg"
import jul4 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5590.jpg"
import jul5 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5591.jpg"
import jul6 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5592.jpg"
import jul7 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5593.jpg"
import jul8 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5594.jpg"
import jul9 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5595.jpg"
import jul10 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5596.jpg"
import jul11 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5597.jpg"
import jul12 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5598.jpg"
import jul13 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5599.jpg"
import jul14 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5600.jpg"
import jul15 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5601.jpg"
import jul16 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5602.jpg"
import jul17 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5603.jpg"
import jul18 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5604.jpg"
import jul19 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5605.jpg"
import jul20 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5606.jpg"
import jul21 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5607.jpg"
import jul22 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5608.jpg"
import jul23 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5609.jpg"
import jul24 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5610.jpg"
import jul25 from "../images/gallery/Jul-2017-IPMS-Meeting/IMG_5611.jpg"

import nov1 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143357607.jpg"
import nov2 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143403260.jpg"
import nov3 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143416594.jpg"
import nov4 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143434922.jpg"
import nov5 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143459717.jpg"
import nov6 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144631238.jpg"
import nov7 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144638775.jpg"
import nov8 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144646761.jpg"
import nov9 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144702216.jpg"
import nov10 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144710617.jpg"
import nov11 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144715678.jpg"
import nov12 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144721760.jpg"
import nov13 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144732295.jpg"
import nov14 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144739411.jpg"
import nov15 from "../images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_145335327.jpg"

const phantom = [
  { src: phantom1 },
  { src: phantom2 },
  { src: phantom3 },
  { src: phantom4 },
  { src: phantom5 },
  { src: phantom6 },
  { src: phantom7 },
  { src: phantom8 },
  { src: phantom9 },
  { src: phantom10 },
  { src: phantom11 },
  { src: phantom12 },
  { src: phantom13 },
  { src: phantom14 },
  { src: phantom15 },
  { src: phantom16 },
  { src: phantom17 },
  { src: phantom18 },
  { src: phantom19 },
  { src: phantom20 },
  { src: phantom21 },
  { src: phantom22 },
  { src: phantom23 },
  { src: phantom24 },
  { src: phantom25 },
  { src: phantom26 },
  { src: phantom27 },
  { src: phantom28 },
  { src: phantom29 },
  { src: phantom30 },
  { src: phantom31 },
  { src: phantom32 },
  { src: phantom33 },
  { src: phantom34 },
  { src: phantom35 },
  { src: phantom36 },
  { src: phantom37 },
  { src: phantom38 },
  { src: phantom39 },
  { src: phantom40 },
  { src: phantom41 },
  { src: phantom42 },
  { src: phantom43 },
  { src: phantom44 },
  { src: phantom45 },
  { src: phantom46 },
  { src: phantom47 },
  { src: phantom48 },
  { src: phantom49 },
  { src: phantom50 },
]

const ipmsjune = [
  { src: ipms1 },
  { src: ipms2 },
  { src: ipms3 },
  { src: ipms4 },
  { src: ipms5 },
  { src: ipms6 },
  { src: ipms7 },
  { src: ipms8 },
  { src: ipms9 },
  { src: ipms10 },
  { src: ipms11 },
  { src: ipms12 },
  { src: ipms13 },
  { src: ipms14 },
  { src: ipms15 },
  { src: ipms16 },
  { src: ipms17 },
  { src: ipms18 },
  { src: ipms19 },
  { src: ipms20 },
  { src: ipms21 },
  { src: ipms22 },
  { src: ipms23 },
]

const jul = [
  { src: jul1 },
  { src: jul2 },
  { src: jul3 },
  { src: jul4 },
  { src: jul5 },
  { src: jul6 },
  { src: jul7 },
  { src: jul8 },
  { src: jul9 },
  { src: jul10 },
  { src: jul11 },
  { src: jul12 },
  { src: jul13 },
  { src: jul14 },
  { src: jul15 },
  { src: jul16 },
  { src: jul17 },
  { src: jul18 },
  { src: jul19 },
  { src: jul20 },
  { src: jul21 },
  { src: jul22 },
  { src: jul23 },
  { src: jul24 },
  { src: jul25 },
]

const nov = [
  { src: nov1 },
  { src: nov2 },
  { src: nov3 },
  { src: nov4 },
  { src: nov5 },
  { src: nov6 },
  { src: nov7 },
  { src: nov8 },
  { src: nov9 },
  { src: nov10 },
  { src: nov11 },
  { src: nov12 },
  { src: nov13 },
  { src: nov14 },
  { src: nov15 },
]

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = { modalIsOpen: false }

    this.bodyPageAnimation = this.bodyPageAnimation.bind(this)
    this.toogleMobileNav = this.toogleMobileNav.bind(this)
  }

  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }))
  }

  bodyPageAnimation() {
    // Body / Page animations
    $("body").addClass("animated fadeIn")
    $("#notification").addClass("animated fadeIn")
    $("#hero").addClass("animated fadeIn")
  }

  toogleMobileNav() {
    // Toggle Mobile Nav
    $("#nav_toggle").click(function() {
      $(".primary-navigation").toggleClass("is-toggled")
    })
  }

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
                    onClick={() => {
                      this.setState({ modalIsOpen: true })
                    }}
                  ></div>
                  <ModalGateway>
                    {modalIsOpen ? (
                      <Modal onClose={this.toggleModal}>
                        <Carousel views={nov} />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </li>
                <li id="ipms_jul_2017_gal" className="card">
                  <h2 className="card-title">IPMS July 2017 Meeting</h2>
                  <div
                    className="card-featured-image"
                    style={{ backgroundImage: "url(" + JulyIPMS + ")" }}
                    onClick={() => {
                      this.setState({ modalIsOpen: true })
                    }}
                  ></div>
                  <ModalGateway>
                    {modalIsOpen ? (
                      <Modal onClose={this.toggleModal}>
                        <Carousel views={jul} />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </li>
                <li id="ipms_june_2017_gal" className="card">
                  <h2 className="card-title">IPMS June 2017 Meeting</h2>
                  <div
                    className="card-featured-image"
                    style={{ backgroundImage: "url(" + JuneIPMS + ")" }}
                    onClick={() => {
                      this.setState({ modalIsOpen: true })
                    }}
                  ></div>
                  <ModalGateway>
                    {modalIsOpen ? (
                      <Modal onClose={this.toggleModal}>
                        <Carousel views={ipmsjune} />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </li>
                <li id="phantom_phurball_2017_gal" className="card">
                  <h2 className="card-title">Phantom Phurball 2017</h2>
                  <div
                    className="card-featured-image"
                    style={{ backgroundImage: "url(" + PhantomPhurball + ")" }}
                    onClick={() => {
                      this.setState({ modalIsOpen: true })
                    }}
                  ></div>
                  <ModalGateway>
                    {modalIsOpen ? (
                      <Modal onClose={this.toggleModal}>
                        <Carousel views={phantom} />
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
