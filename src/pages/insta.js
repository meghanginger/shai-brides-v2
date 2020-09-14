import React from 'react';
import SEO from "../components/SEO";
import links from "../data/instaLinks";
import content from "../data/content-cdn";
import icons from "../data/socials-list";
import Img from 'gatsby-image';

const insta = ({ data }) => (
  <>
    <SEO title="LINKS | SHAI BRIDES" />
    <Img
      fluid={data.honeydewBg.childImageSharp.fluid}
      alt=""
      className="homeImageMobile honeydewBg"
    />
    <div className="honeydewDiv">
      <div className="instaContainer">
        <a href="/">
          <img className="instaLogo" src={content.Logos.white} alt="" />
        </a>
        <div className="instaSocials">
          {icons.map(icon => (
            <a href={icon.href} label={icon.label}>
              <img src={icon.location} alt="" />
            </a>
          ))}
        </div>
        {links.map(link => (
          <a className="instaLink" href={link.Link}>
            {link.Text}
          </a>
        ))}
      </div>
    </div>
  </>
)

export const query = graphql`
  query {
    homeDesktop: file(relativePath: { eq: "homeDesktop.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homeMobile: file(relativePath: { eq: "homeMobile.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    beachDesktop: file(relativePath: { eq: "beachDesktop.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    beachMobile: file(relativePath: { eq: "beachMobile.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    honeydewBg: file(relativePath: { eq: "honeydewBg.png" }) {
      childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
 `

export default insta;