import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import BioText from '../data/bio-text.json';

const Bio = ({ data }) => {
  const test = useStaticQuery(
    graphql`
      query {
        allBiographys {
          edges {
            node {
            }
          }
        }
      }
    `,
  );
  console.log(test);
  return (
  <>
    <Img
      fluid={data.beachDesktop.childImageSharp.fluid}
      alt="Shai brides under the pier"
      className="bioImageMobile"
    />
    <div className="divShadow">
      <h2 className="joieHeader is-dark-blue-bg is-white">ABOUT THE BAND</h2>
      <div className="bioText is-dark-blue-bg is-white container-fluid">
        {BioText.map((para) => (
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
}

Bio.propTypes = {
  data: PropTypes.shape({
    beachDesktop: PropTypes.string.isRequired,

  }).isRequired,
}

export default Bio;

