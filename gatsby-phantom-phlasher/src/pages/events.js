import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import PPLogo from "../images/Phantom-Phlashers-Logo.png"

const events = () => {
  return (
    <Layout>
      <SEO title="Phantom phlashers IPMS - Brimingham - Alabama" />
      <div id="background_wrapper" className="full-background sky">
        <div className="overlay"></div>
        <main className="container">
          <Navbar />
          <section id="hero" className="hero-wrapper is-subpage">
            <h4 className="hero-subheading">Upcoming meetings</h4>
            <ul className="date-boxes">
              <li>
                <span className="month">Oct</span>
                <span className="large-date">5</span>
              </li>
              <li>
                <span className="month">Nov</span>
                <span className="large-date">2</span>
              </li>
              <li>
                <span className="month">Dec</span>
                <span className="large-date">7</span>
              </li>
            </ul>
            <p className="subheading-text">
              All meetings are held at the{" "}
              <a href="https://goo.gl/maps/gqK9V2Djh2p" target="_blank">
                Homewood Public Library
              </a>
              , Room 110 from 1:00 - 3:30pm. First Saturday of every month.
            </p>
            <p className="subheading-text">
              The meetings are open to all modelers of all skill levels and all
              ages. IPMS membership is not required, but is encouraged.
            </p>
            <p className="subheading-text">
              There is no cost to attend the meetings. If you would like to join
              the Phantom Phlashers, dues are $12.00 & 2 model kits for the
              contest raffle, or $25.00 for a trophy package, recurring yearly.
              We primarily focus on military models, but modelers of all genres
              are welcome.
            </p>
            <section className="page-section has-featured-image">
              <img
                src={PPLogo}
                alt="Phantom Phlashers logo"
                className="page-section-featured-image"
              />
              <h4 className="hero-subheading">Phantom Phurball 2020</h4>
              <p className="subheading-text">
                <strong>
                  Saturday, March 28, 2020 at the{" "}
                  <a href="https://goo.gl/maps/h3jeKiq3yWP2" target="_blank">
                    Anniston City Meeting Center.
                  </a>
                </strong>{" "}
                1615 Noble St. Anniston, AL 36201
              </p>
              <p className="subheading-text">Region 3 Convention</p>
              <ul className="list-normal">
                <li>
                  Celebrating The 75th Anniversary of the End of World War II in
                  Europe
                </li>
                <li>CONTEST THEMES:</li>
                <li>World War II Aircraft & Armor in service in 1945.</li>
                <li>
                  20/20 Vision: models wearing eyes. Any vehicle with eyes
                  painted on it, excluding figures, is eligible.
                </li>
                <li>Best Ford Mustang.</li>
                <li>"Hop On In The Back, Boys!" Pick-up Trucks</li>
                <li>Don't Call It Tiny! Any light tank from any nation</li>
                <li>To The Rescue! Emergency responders from any category</li>
              </ul>
              <p className="subheading-text">
                REGISTRATION & Vendor Information:
              </p>
              <ul className="list-normal">
                <li>FREE ADMISSION!</li>
                <li>
                  MODEL REGISTRATION IS $10.00 FOR YOUR FIRST MODEL, $1.00 FOR
                  EACH ADDITIONAL MODEL. $2.00 IPMS MEMBER DISCOUNT. JUNIOR
                  MODELERS 17 AND UNDER: $5.00 UNLIMITED MODELS!
                </li>
                <li>REGISTRATION CLOSES AT 12:00. JUDGING BEGINS AT 12:30.</li>
              </ul>
              <p className="subheading-text">VENDORS TABLES:</p>
              <ul className="list-normal">
                <li>
                  $20.00 EACH. RESEVATIONS OF MORE THAN 5 TABLES WILL BE CHARGED
                  $20 FOR THE FIRST TABLE AND $15 FOR EACH ADDITIONAL TABLE.
                </li>
                <li>
                  MODEL REGISTRATION IS $10.00 FOR YOUR FIRST MODEL, $1.00 FOR
                  EACH ADDITIONAL MODEL. $2.00 IPMS MEMBER DISCOUNT. JUNIOR
                  MODELERS 17 AND UNDER: $5.00 UNLIMITED MODELS!
                </li>
                <li>REGISTRATION CLOSES AT 12:00. JUDGING BEGINS AT 12:30.</li>
                <li>VENDOR CONTACT:</li>
                <li>
                  TREY RUSH at:{" "}
                  <a href="mailto:rushval@gmail.com">RUSHWAL@GMAIL.COM</a> (205)
                  478-4091
                </li>
                <li>CONTEST CONTACT:</li>
                <li>
                  Joey Richardson at:{" "}
                  <a href="mailto:phantomphocus@gmail.com">
                    PHANTOMPHOCUS@GMAIL.COM{" "}
                  </a>{" "}
                  (205) 388-0269 or
                </li>
                <li>
                  JOHN CORNETT at:{" "}
                  <a href="mailto:rushwal@gmail.com">RUSHWAL@GMAIL.COM </a>{" "}
                  (205) 283-5881
                </li>
              </ul>
              <p className="subheading-text">
                See the{" "}
                <a href="images/pdfs/phantom-phurball-2020.pdf" target="_blank">
                  contest flyer
                </a>{" "}
                for more information.
              </p>
            </section>
            {/* <!--			<section class="page-section">-->
<!--				<h4 class="hero-subheading">Upcoming Contests - 2019</h4>-->
<!--				<ul class="upcoming-events-list">-->
<!--					<li class="upcoming-event-item">-->
<!--						<div class="date-box">-->
<!--							<p class="date-month">May</p>-->
<!--							<p class="date-day">18</p>-->
<!--						</div>-->
<!--						<div class="event-info">-->
<!--							<h3 class="event-title">37th Annual Smoky Mtn Model-Con</h3>-->
<!--							<p>Chilhowee Park Expo Center <span class="mid-dot">&middot;</span> 9-4pm <span class="mid-dot">&middot;</span> 3301 East Magnolia Ave, Knoxville, TN </p>-->
<!--							<div class="event-action">-->
<!--								<a href="images/pdfs/2019-knoxville.pdf" target="_blank" class="btn btn-default">View Flyer</a>-->
<!--							</div>-->
<!--						</div>-->
<!--					</li>-->
<!--					<li class="upcoming-event-item">-->
<!--						<div class="date-box">-->
<!--							<p class="date-month">Aug</p>-->
<!--							<p class="date-day">24</p>-->
<!--						</div>-->
<!--						<div class="event-info">-->
<!--							<h3 class="event-title">Huntsville Plastic Modelers Society 43rd Model Contest</h3>-->
<!--							<p>Huntsville Jaycees Building <span class="mid-dot">&middot;</span> 9-4pm <span class="mid-dot">&middot;</span> 2180 Airport Road SW, Huntsville, AL </p>-->
<!--						</div>-->
<!--					</li>-->
<!--				</ul>-->
<!--			</section>-->
	<!-- <footer class="main-home-footer">
		<a href="index.html"><img src="images/Phantom-Phlashers-Logo-small.png" alt="Phantom Phlashers IPMS Logo" class="footer-slug" width="100%"></a>
		<p class="footer-copyright-info">Copyright 2017 Phantom Phlashers IPMS Birmingham &middot; All Rights Reserved</p>
    </footer> --> */}
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default events
