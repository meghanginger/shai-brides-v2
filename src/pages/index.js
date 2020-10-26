import React from "react"
import EnterWebsite from "../components/tempPages/enterWebsite";
// import { configureAnchors } from 'react-scrollable-anchor';
//configureAnchors({scrollDuration: 600})

const IndexPage = ({ data }) => (
  <EnterWebsite data={data} /> 
)

export const query = graphql`
  query {
    homeDesktop: file(relativePath: { eq: "vits/vitsDesktop.jpeg" }) {
    childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    homeMobile: file(relativePath: { eq: "vits/vitsMobile.jpeg" }) {
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
 
export default IndexPage;
