import React from 'react';
import MainPage from "../components/tempPages/mainPage";

const home = ({ data }) => (
  <MainPage data={data} />
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
    honeydewBg: file(relativePath: { eq: "honeydewBg.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      honeydewDesktop: file(relativePath: { eq: "honeydewDesktopReleased.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      honeydewMobile: file(relativePath: { eq: "honeydewMobileReleased.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
  }
 `
export default home;