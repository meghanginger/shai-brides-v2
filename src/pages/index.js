import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Joie from "../components/Joie"
import Tokyo from "../components/Tokyo"
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import ScrollAnchor from "../components/ScrollAnchor";
import Landing from "../components/Landing";
import Live from "../components/Live";
// import { configureAnchors } from 'react-scrollable-anchor';
//configureAnchors({scrollDuration: 600})

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="SHAI BRIDES" />
    <h1 className="visuallyHidden">
      Shai Brides
    </h1>
    <Landing data={data} />
    <ScrollAnchor linkId="live" />
    <Live />
    <ScrollAnchor linkId="tokyo" />
    <Tokyo />
    <ScrollAnchor linkId="joie" />
    <Joie />
    <ScrollAnchor linkId="about-the-band" />
    <Bio data={data}/>
    <Footer bgColour="new-blue"/>
  </Layout>
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
  }
 `

export default IndexPage;
