/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import CookieConsent from "react-cookie-consent";
import Menu from "../data/menu-list";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <head>
        <meta
          meta
          name="viewport"
          content="width=device-width"
        />
      </head>
      <header>
        {showMenu ? (
          <div className="menuDiv" id="mainMenu">
            <div className="menuDivSecond">
              <button 
                className="xButton"
                aria-label="Close menu"
                onClick={() => {
                  setShowMenu(false);
                  }} >
                    <img
                  className="xMenu"
                  src={require("../icons/cross.svg")}
                  alt=""
                />
              </button>
              {Menu.map(header => (
                <a href={header.link}>
                  <h2>{header.label}</h2>
                </a>
              ))}
              <div className="menuIconDiv">
                <a href="https://www.instagram.com/shaibrides" >
                  <img src={require("../icons/insta.svg")} alt="Instagram" />
                </a>
                <a href="https://www.youtube.com/channel/UCUfSV1sIHcMBEou0r5JcpnQ" >
                  <img src={require("../icons/youtube.svg")} alt="Youtube"/>
                </a>
                <a href="https://open.spotify.com/artist/4ubmraLEMNqkNnWkvnq0a5?si=3qRrLeXzTMuBGSVmSG4jHg" >
                  <img src={require("../icons/spotify.svg")} alt="Spotify" />
                </a>
                <a href="mailto:harry@sonicgunconcerts.co.uk"  >
                  <img src={require("../icons/mail.svg")} alt="Email Shai Brides' Manager"/>
                </a>
                <a href="https://www.facebook.com/shaibrides" >
                  <img src={require("../icons/facebook.svg")} alt="Facebook"/>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <button 
            className="menuButton"
            aria-label="Open menu"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <img
              className="burgerMenu"
              src={require("../icons/burger.svg")}
              alt=""
            />
          </button>
        )}
      </header>
      <body>
      <CookieConsent
        location="bottom"
        buttonText="Accept cookies"
        acceptOnScroll={true}
        cookieName="ShaiBridesConsentCookie"
        style={{ background: "rgba(0, 0, 0, 0.75)" }}
        buttonStyle={{
          color: "white",
          fontSize: "1rem",
          background: "rgb(16, 97, 100, 0.9)",
          fontFamily: "Jura",
          padding: 10,
          opacity: 1,
          "text-shadow": "2px 2px 2px #111111",
          border: "0.2rem solid white",
          "border-radius": 2,
          "min-width": "12rem",
        }}
      >
        <h4 className="margin-0">
          This website uses cookies to enhance the user experience. Sorry, it's just how the web works now.
        </h4>
      </CookieConsent>
        <main>{children}</main>
      </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

// TODO: Refine menu, add nav for accessibility, ul