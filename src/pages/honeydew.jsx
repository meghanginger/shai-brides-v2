import React from 'react';
import Footer from "../components/footer";
import SEO from "../components/SEO";
import Img from 'gatsby-image';
import imageURLs from '../data/content-cdn';
import text from '../data/honeydew/honeydewBody'

const honeydew = ({ data }) => (
  <>
    <SEO title="HONEYDEW | SHAI BRIDES" />
    <div className="honeydewPageDiv honeydew-pink-bg" >
      <img src={imageURLs.Logos.black} className="honeydewBandLogo" alt="Shai Brides Logo" />
      <div className="honeydewSubdiv">
        <Img
        fluid={data.honeydewCover.childImageSharp.fluid}
        alt=""
        className="honeydewPortrait"
        />
        <h1 className="honeydewLogo honeydew-dark-blue">honey<i>dew</i></h1>
        <p className="honeydewBody">
          {text}
        </p>
        <div className="honeydewText honeydew-dark-blue">Out 31st July on all major streaming platforms</div>
        <a className="honeydewLink" href="/insta">
            STREAM NOW
        </a>
      </div>
      <Footer bgColour="new-blue"/>
    </div>
  </>
)

// 
export const query = graphql`
  query {
    honeydewBg: file(relativePath: { eq: "honeydewBg.png" }) {
      childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    homeDesktop: file(relativePath: { eq: "homeDesktop.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    honeydewMobile: file(relativePath: { eq: "honeydewMobile.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    honeydewCover: file(relativePath: { eq: "honeydewCover.jpeg" }) {
      childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
 `

export default honeydew;
