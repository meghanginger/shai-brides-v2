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
      className={"bioImageMobile"}
    />
    <div className="divShadow">
      <h2 className="joieHeader is-dark-blue-bg is-white">ABOUT THE BAND</h2>
      <div className="bioText is-dark-blue-bg is-white container-fluid">
        {BioText.map(para => (
          <p className="bioPara">
            {para.Text}
          </p>
        ))}
        <p className="bioPara">
          For booking enquiries, please <a href="mailto:harry@sonicgunconcerts.co.uk">contact Harry Young</a> (management).
        </p>
      </div>
    </div>
  </>
);