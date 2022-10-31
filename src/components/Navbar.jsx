import React from "react";
import "./styles/styles.css"
import "./styles/navbar.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid ">
          <Link to="/" className="navbar-nav" >
            <img
              src="./images/logo.png"
              width={110}
              height={91}
              className="logo-open"
              alt="Aliz Beauty Logo"
            />
          </Link>
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar" />
            <span className="toggler-icon middle-bar" />
            <span className="toggler-icon bottom-bar" />
          </button>
          <div
            className="collapse navbar-collapse justify-contend-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav sm-icons">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://facebook.com/alizbeautygraz"
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  <FaFacebookF />
                  <IconContext.Provider />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://instagram.com/alizbeauty_graz"
                  target="_blank"
                  rel='noopener noreferrer'
                >
                    <FaInstagram />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="mailto:heilingaliz17@gmail.com"
                  target="_blank"
                  rel='noopener noreferrer'
                >
                <FaEnvelope/>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="tel:004368120252649"
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  <FaMobileAlt />
                </a>
              </li></IconContext.Provider>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Über mich</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/nagel" className="nav-link">
                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Nägel</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/wimpern" className="nav-link">
                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Wimpern</span>
                </Link>
              </li>
              <li className="nav-item">
                <HashLink to="/#kontakt" className="nav-link">
                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Kontakt</span>
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;
