/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
          content="width=device-width, user-scalable=no"
        />
      </head>
      <header>
        {showMenu ? (
          <div className="menuDiv">
            <div className="menuDivSecond">
              <img
                className="xMenu"
                src={require("../icons/cross.svg")}
                alt=""
                onClick={() => {
                  setShowMenu(false)
                }}
              />
              {Menu.map(header => (
                <a href={header.link}>
                  <h2>{header.label}</h2>
                </a>
              ))}
              <div className="menuIconDiv">
                <a href="https://www.instagram.com/shaibrides">
                  <img src={require("../icons/insta.svg")} />
                </a>
                <a href="https://www.youtube.com/channel/UCUfSV1sIHcMBEou0r5JcpnQ">
                  <img src={require("../icons/youtube.svg")} />
                </a>
                <a href="https://open.spotify.com/artist/4ubmraLEMNqkNnWkvnq0a5?si=3qRrLeXzTMuBGSVmSG4jHg">
                  <img src={require("../icons/spotify.svg")} />
                </a>
                <a href="mailto:shaibrides@gmail.com">
                  <img src={require("../icons/mail.svg")} />
                </a>
                <a href="https://www.facebook.com/shaibrides">
                  <img src={require("../icons/facebook.svg")} />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <img
            className="burgerMenu"
            src={require("../icons/burger.svg")}
            alt=""
            onClick={() => {
              setShowMenu(true)
            }}
          />
        )}
      </header>
      <body>
        <main>{children}</main>
      </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/*
<div className="menuIconDiv">
                <a href="https://www.instagram.com/shaibrides">
                  <img src={require("../../icons/insta.svg")} />
                </a>
                <a href="https://www.youtube.com/channel/UCUfSV1sIHcMBEou0r5JcpnQ">
                  <img src={require("../../icons/youtube.svg")} />
                </a>
                <a href="https://open.spotify.com/artist/4ubmraLEMNqkNnWkvnq0a5?si=3qRrLeXzTMuBGSVmSG4jHg">
                  <img src={require("../../icons/spotify.svg")} />
                </a>
                <a href="mailto:shaibrides@gmail.com">
                  <img src={require("../../icons/mail.svg")} />
                </a>
                <a href="https://www.facebook.com/shaibrides">
                  <img src={require("../../icons/facebook.svg")} />
                </a>
              </div>

              <div className="menuIconDiv">
                {Socials.map(social => {
               
                  return (
                  <a href={social.href}>
                    <img src={require(""+social.location)} alt={social.label} />
                  </a>
                )})
                }
              </div>
            */