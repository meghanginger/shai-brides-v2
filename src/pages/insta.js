import React from 'react';
import SEO from "../components/SEO";
import links from "../data/instaLinks";
import content from "../data/content-cdn";
import icons from "../data/socials-list";
import Img from 'gatsby-image';
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import firebase from 'gatsby-plugin-firebase'; 

const insta = ({ data }) => {
  // loading is boolean - USE ALWAYS!!!!!!!
  /*
  const [value, loading, error] = useCollectionOnce(firebase.firestore().collection("instaLinks"));
  if (loading || error) {
    return <h1>LOADING</h1>
  };
  const firebaseData = value.docs.map(item => item.data());
  console.log(firebaseData);
  */
  return (
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
        <img src="https://ik.imagekit.io/shaibrides/vits-line_ILA3O9bcf.svg" className="vitsSquareIcons" />
      </div>
    </>
    )
};

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
    honeydewBg: file(relativePath: { eq: "vits/bubbles-low.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
 `

export default insta;