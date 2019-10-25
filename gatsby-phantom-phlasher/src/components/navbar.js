import React from "react"
import { Link } from "gatsby"
import FacebookIcon from "../images/facebook-icon.svg"
import EmailIcon from "../images/email-icon.svg"

const Navbar = () => {
  return (
    <header id="primary_header" className="primary-header">
      <a href="/" className="logo-text">
        Phantom Phlashers
      </a>
      <button
        type="button"
        role="button"
        id="nav_toggle"
        className="nav-menu-button"
      >
        Menu
      </button>
      <nav className="primary-navigation">
        <ul className="primary-navigation-menu">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="social-icon">
            <a
              href="https://www.facebook.com/Phantom-Phlashers-111867315510781/"
              target="_blank"
            >
              <img src={FacebookIcon} alt="Facebook" />
            </a>
          </li>
          <li className="social-icon">
            <a href="mailto:mcastre3@gmail.com">
              <img src={EmailIcon} alt="Email" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
