import React from 'react';
import SEO from "../SEO";
import Img from 'gatsby-image';
import imageURLs from '../../data/content-cdn';

const enterWebsite = ({ data }) => (
  <>
    <SEO title="ENTER WEBSITE | SHAI BRIDES" />
    <div className="indexContainer">
      <Img
        fluid={data.honeydewBg.childImageSharp.fluid}
        alt=""
        className="homeImageMobile honeydewBg"
      />
      <div className="honeydewDiv" >
        <img src={imageURLs.Logos.black} className="honeydewBandLogo" alt="Shai Brides Logo" />
        <div className="honeydewSubdiv">
          <h1 className="honeydewLogo honeydew-dark-blue">honey<i>dew</i></h1>
          <div className="honeydewText honeydew-dark-blue alignCenter">Out now on all major streaming platforms</div>
          <a className="honeydewLink" href="/honeydewStory">
            Find out more
          </a>
          <a className="honeydewLink" href="/home">
            Enter website
          </a>
        </div>
      </div>
    </div>
  </>
)

export default enterWebsite;