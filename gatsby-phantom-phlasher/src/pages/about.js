import React from "react"
import Navbar from "../components/navbar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageOne from "../images/about-01.jpg"
import ImageTwo from "../images/about-02.jpg"
import ImageThree from "../images/about-03.jpg"
import ImageFive from "../images/about-05.jpg"
import ImageFour from "../images/about-04.jpg"
import PPLogo from "../images/Phantom-Phlashers-Logo.png"

const about = () => {
  return (
    <Layout>
      <SEO title="Phantom phlashers IPMS - Brimingham - Alabama" />
      <div id="background_wrapper" className="full-background sky">
        <div className="overlay"></div>
        <div className="container">
          <Navbar />
        </div>
        <main className="page-wrapper">
          <section className="colored-text-block">
            <h1 className="subheading-text">
              In 1971, a group of modelers in Birmingham, AL got together to
              form the Birmingham Plastic Modelers Association, a group that has
              been in continuous existence ever since.
            </h1>
          </section>
          <section className="article-block-wrapper">
            <div className="article-block">
              <div className="article-image">
                <img
                  src={ImageOne}
                  alt="Carl Looking at Bird of Prey"
                  width="100%"
                />
              </div>
              <div className="article-text">
                <p>
                  As I remember, Dave Beck and Ernie Bradford were the movers
                  and shakers getting the ball rolling. An old newsletter
                  reports there were sixteen modelers at the initial meeting and
                  23 by the March, 1972 roster. Two of those modelers are still
                  active in the club. Today we have forty five listed on our
                  roster.
                </p>
                <p>
                  Speaking of newsletters, much of this information was gleaned
                  from the newsletters we published in the early days.
                </p>
              </div>
            </div>
          </section>
          <section className="colored-text-block red-block no-gutter">
            <p className="subheading-text">
              In 1972, Ernie designed and built display tables which we used to
              put on "shows" at local malls and the State Fair. The design was
              published in the July and August 1972 issue of the British IPMS
              monthly magazine.
            </p>
          </section>
          <section className="article-block-wrapper is-opaque">
            <div className="article-block">
              <div className="article-text">
                <p>
                  A highlight of the early meetings and contests were the 16mm
                  movies of airplanes in World War Two. In January, 1972, we saw
                  the original "Memphis Belle" made in 1945. Little did we know
                  at that time what a classic we were watching!
                </p>
                <p>
                  Homewood Cycle and Hobby Shop was our benefactor then, a
                  relation that continues today with the next generation of
                  owners! Our early newsletters always mention the door or
                  contest prizes furnished by Walter at the hobby shop.
                </p>
              </div>
              <div className="article-image">
                <img src={ImageTwo} alt="About Image 2" width="100%" />
              </div>
            </div>
          </section>
          <section className="article-block-wrapper two-thirds-block">
            <div className="article-block">
              <div className="article-image">
                <img src={ImageThree} alt="About 3" width="100%" />
              </div>
              <div className="article-text">
                <p>
                  Our first club membership contest was June 1972, I took second
                  with a Hawk Me 163, which I still have! Back then we had two
                  categories, flying and non flying. I have a flier from our
                  third contest/ mini convention held in 1977 at the airport
                  Holiday Inn. By then we were up to 31 categories. One feature
                  of our early contests was "slides and/or movies will run
                  continuously in an adjacent room". A great place to sit down,
                  relax and see the real thing in action.
                </p>
                <p>
                  We have been consistent in holding a local contest open to the
                  public every year for the past thirty-three years. Due to
                  cost, we moved the location of our contests to Anniston,
                  Alabama which has a very nice, well lighted "convention
                  center". We usually hold our contest in the spring and attract
                  modelers from all over the southeast. In 2007 over one hundred
                  modelers attended bring over four hundred models with them.
                </p>
              </div>
            </div>
          </section>
          <section className="colored-text-block navy-block no-gutter has-normal-text">
            <p className="normal-text">
              Our first meetings were in member's homes, then in an unheated and
              non air conditioned room at the local fixed base operation, then
              in a corporate building of one member and finally in the mid
              1980's, at the new Southern Museum of Flight in return for
              providing models for display and assistance for their programs. We
              still meet there on the first Saturday of each month. The club
              continues to build for the museum, with recent efforts including a
              1/72 air wing for the museums 1/72 U.S.S. Enterprise diorama.
            </p>
            <p className="normal-text">
              Our meetings are fairly informal, beginning with a short business
              agenda to discuss upcoming contest, Toys for Tots contributions,
              IPMS matters, etc. This is usually followed by a demonstration of
              some modeling technique. Of course, we have the show and tell time
              for both completed models or the latest kit someone has just
              bought. All this can be interrupted when a member brings in boxes
              of surplus kits to sell!
            </p>
            <p className="normal-text">
              Over the years modelers have come and gone in our club but we have
              always been blessed with some very talented modelers who have
              served as inspiration for others.
            </p>
          </section>
          <section className="article-block-wrapper">
            <div className="article-block">
              <div className="article-text">
                <img src={ImageFive} alt="About 5" width="100%" />
              </div>
              <div className="article-image">
                <img src={ImageFour} alt="About 4" width="100%" />
              </div>
            </div>
          </section>
          <section className="article-block-wrapper two-thirds-block">
            <div className="article-block">
              <div className="article-image">
                <img src={PPLogo} alt="Phantom Phlashers Logo" width="100%" />
              </div>
              <div className="article-text">
                <p>
                  As for the name...Birmingham was the home of the 106th
                  Tactical Reconnaissance Squadron, which used the RF-4C
                  Phantom. It was only natural for us to adopt the name "Phantom
                  Phlashers" in honor of our local unit. Unfortunately, the
                  Phantoms have been retired and the group now flies tankers,
                  but we still remember the roar of those Phantoms thundering
                  down the runway. For many years, we would have a club contest
                  for the best Phantom and we included a "Best Phantom" trophy
                  in our local contests.
                </p>
                <p>
                  This lineage is the inspiration for our annual Anniston
                  contest theme.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default about
