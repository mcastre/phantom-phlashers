import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import $ from "jquery"
import GalerryCollege from "../images/gallery/Nov-2017-IPMS-Meeting/nov-2017-gallery-collage.png"
import JulyIPMS from "../images/gallery/Jul-2017-IPMS-Meeting/jul-2017-gallery-collage.png"
import JuneIPMS from "../images/gallery/Jun-2017-IPMS-Meeting/june-2017-gallery-collage.png"
import PhantomPhurball from "../images/gallery/Phantom-Phurball-2017/phantom-phurball-gallery-collage.png"

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.bodyPageAnimation = this.bodyPageAnimation.bind(this)
    this.toogleMobileNav = this.toogleMobileNav.bind(this)
    this.phantomPhurballBox = this.phantomPhurballBox.bind(this)
    this.IpmsJune = this.IpmsJune.bind(this)
    this.IpmsJuly = this.IpmsJuly.bind(this)
    this.IpmsNov = this.IpmsNov.bind(this)
  }

  componentDidMount() {
    this.bodyPageAnimation()
    this.toogleMobileNav()
    this.phantomPhurballBox()
    this.IpmsJune()
    this.IpmsJuly()
    this.IpmsNov()

    // function preload(images) {
    //   $(images).each(function() {
    //     $("<img>")
    //       .attr("src", this)
    //       .appendTo("body")
    //       .hide()
    //   })
    // }

    // preload(["images/diorama.png", "images/ADGZ-scratchbuilt.png"])
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

  phantomPhurballBox() {
    // Justified Gallery
    $("#phantom_phurball_2017_gal").on("click", function(e) {
      e.preventDefault()
      $.swipebox([
        {
          href: "images/gallery/Phantom-Phurball-2017/IMG_5208.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "images/gallery/Phantom-Phurball-2017/IMG_5209.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "images/gallery/Phantom-Phurball-2017/IMG_5210.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "images/gallery/Phantom-Phurball-2017/IMG_5214.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "images/gallery/Phantom-Phurball-2017/IMG_5215.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "images/gallery/Phantom-Phurball-2017/IMG_5216.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "images/gallery/Phantom-Phurball-2017/IMG_5217.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "images/gallery/Phantom-Phurball-2017/IMG_5218.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5219.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5220.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5221.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5222.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5223.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5224.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5225.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5226.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5227.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5228.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5229.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5240.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5241.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5242.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5243.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5244.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5245.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5246.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5247.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5251.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5253.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5254.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5255.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5256.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5257.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5262.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5263.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5264.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5265.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5266.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5267.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5268.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5269.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5270.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5271.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5272.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5273.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5276.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5277.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5278.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5279.jpg",
          title: "Phantom Phurball 2017",
        },
        {
          href: "../images/gallery/Phantom-Phurball-2017/IMG_5280.jpg",
          title: "Phantom Phurball 2017",
        },
      ])
    })
  }

  IpmsJune() {
    $("#ipms_june_2017_gal").click(function(e) {
      e.preventDefault()
      $.swipebox([
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5508.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5509.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5510.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5511.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5512.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5513.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5514.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5515.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5516.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5517.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5518.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5519.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5520.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5521.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5522.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5523.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5524.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5525.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5526.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5527.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5528.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5529.jpg",
          title: "IPMS June 2017 Meeting",
        },
        {
          href: "../static/gallery/Jun-2017-IPMS-Meeting/IMG_5530.jpg",
          title: "IPMS June 2017 Meeting",
        },
      ])
    })
  }

  IpmsJuly() {
    $("#ipms_jul_2017_gal").click(function() {
      $.swipebox([
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5587.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5588.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5589.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5590.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5591.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5592.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5593.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5594.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5595.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5596.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5597.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5598.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5599.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5600.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5601.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5602.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5603.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5604.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5605.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5606.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5607.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5608.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5609.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5610.jpg",
          title: "IPMS July 2017 Meeting",
        },
        {
          href: "images/gallery/Jul-2017-IPMS-Meeting/IMG_5611.jpg",
          title: "IPMS July 2017 Meeting",
        },
      ])
    })
  }

  IpmsNov() {
    $("#ipms_nov_2017_gal").click(function() {
      $.swipebox([
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143357607.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143403260.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143416594.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143434922.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_143459717.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144631238.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144638775.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144646761.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144702216.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144710617.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144715678.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144721760.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144732295.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_144739411.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
        {
          href:
            "images/gallery/Nov-2017-IPMS-Meeting/IMG_20171118_145335327.jpg",
          title: "IPMS Nov 2017 Meeting",
        },
      ])
    })
  }

  render() {
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
              <div>
                <button className="test">Click Me!</button>
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
                    style={{ backgroundImage: "url(" + PhantomPhurball + ")" }}
                  ></div>
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
