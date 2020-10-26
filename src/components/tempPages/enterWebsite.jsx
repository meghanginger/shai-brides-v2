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
          <img src={imageURLs.Vits.logo} className="vitsLogoEnterWebsite" />
          <div className="vitsText honeydew-dark-blue alignCenter">OUT FRIDAY 6TH NOVEMBER ON ALL STREAMING PLATFORMS</div>
          <a className="vitsLink" href="https://snd.click/uqxz">
            PRESAVE NOW
          </a>
          <a className="vitsLink" href="/home">
            Enter website
          </a>
        </div>
        <img src="https://ik.imagekit.io/shaibrides/vits-line_ILA3O9bcf.svg" className="vitsSquareIcons" />
      </div>
    </div>
  </>
)

export default enterWebsite;