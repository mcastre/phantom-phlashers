import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import PuzzleSolving from "../images/blog/puzzle-piece/puzzle-piece-solving-the-crash-of-the-yb-49-image-13.png"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Phantom phlashers IPMS - Brimingham - Alabama" />
      <div id="background_wrapper" className="full-background sky is-full-height">
        <div className="overlay"></div>
        <main className="container">
          <Navbar />
          <section id="hero" className="hero-wrapper is-subpage">
            <div className="primary-page-heading">
              <h1 className="page-heading">The Phantom Phlashers Blog</h1>
            </div>
            <div className="blog-wrapper">
              <article className="blog-card">
                <div className="blog-article-featured-image">
                  <a href="blog-articles/puzzle-piece-solving-the-crash-of-the-yb-49.html">
                    <img src={PuzzleSolving} alt="article featured image" />
                  </a>
                </div>
                <div className="blog-article-content">
                  <small className="article-tag">Diorama</small>
                  <h2 className="blog-article-title">
                    <a href="blog-articles/puzzle-piece-solving-the-crash-of-the-yb-49.html">
                      Puzzle Piece: Solving The Crash of the YB-49
                    </a>
                  </h2>
                  <p className="blog-article-author">By: David Geldmacher</p>
                  <p className="blog-article-preview-text">
                    One key to a successful diorama is a composition that tells
                    a clear story...
                  </p>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default Blog
