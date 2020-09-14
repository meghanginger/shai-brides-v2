import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import imageURLs from '../data/content-cdn';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 480;
const bgImage = isMobile ? 'Mobile' : 'Desktop';

const Landing = ({ data }) => (
  <>
    <div className="indexContainer">
      <Img
        fluid={isMobile
          ? data.honeydewMobile.childImageSharp.fluid
          : data.honeydewDesktop.childImageSharp.fluid}
        alt="Shai brides in forest"
        className="homeImageMobile"
      />
    </div>
    <div className={`logoHomeDiv${bgImage}`}>
      <img src={imageURLs.Logos.white} className={`logoHome${bgImage}`} alt="Shai Brides Logo" />
    </div>
    <div className={`arrowHomeDiv${bgImage}`}>
      <a href="#live">
        <img src={imageURLs.Icons['Down-arrow']} className={`downIcon${bgImage}`} alt="Enter website" />
      </a>
    </div>
    <div className="honeydewLabel">
        <h1 className="honeydewLogo honeydew-pink shadow">honey<i>dew</i></h1>
        <div className="honeydewText honeydew-pink shadow overridePadding">OUT NOW on all major streaming platforms</div>
        <a className="honeydewLink overrideMargin" href="/honeydewStory">
          FIND OUT MORE
        </a>
    </div>
    
  </>
);

Landing.propTypes = {
  data: PropTypes.shape({
    homeMobile: {
      childImageSharp: {
        fluid: PropTypes.string.isRequired,
      },
    },
    homeDesktop: {
      childImageSharp: {
        fluid: PropTypes.string.isRequired,
      },
    },
  }).isRequired,
};

export default Landing;
