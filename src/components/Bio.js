import React from "react";
import Img from "gatsby-image";
import BioText from "../data/bio-text";
import imageURLs from "../data/content-cdn";
const isMobile = typeof window !== 'undefined' && window.innerWidth  < 480;

export default ({ data }) => (
  <>
    <Img
      fluid={data.beachDesktop.childImageSharp.fluid 
      }
      alt="Shai brides under the pier"
      className={"homeImageMobile"}
    />
    <div className="divShadow">
      <h1 className="joieHeader is-dark-blue-bg is-white">ABOUT THE BAND</h1>
      <div className="bioText is-dark-blue-bg is-white container-fluid">
        {BioText.map(para => (
          <p className="bioPara">
            {para.Text}
          </p>
        ))}
      </div>
    </div>
  </>
);