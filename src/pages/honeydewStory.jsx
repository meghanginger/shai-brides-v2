import React from 'react';
import Footer from "../components/footer";
import SEO from "../components/SEO";
import Img from 'gatsby-image';
import imageURLs from '../data/content-cdn';
import text from '../data/honeydew/story'

const honeydew = ({ data }) => (
  <>
    <SEO title="THE STORY OF HONEYDEW | SHAI BRIDES" />
    <div className="honeydewPageDiv honeydew-pink-bg" >
      <img src={imageURLs.Logos.black} className="honeydewBandLogo" alt="Shai Brides Logo" />
      <div className="honeydewSubdiv alignLeft">
      <Img
        fluid={data.honeydewCover.childImageSharp.fluid}
        alt=""
        className="honeydewStoryPortrait"
        />
        <p className="honeydewSubtitleStory alignSelfCenter">THE STORY OF...</p>
        <img src="https://ik.imagekit.io/shaibrides/Honeydew/HONEYDEW_LOGO_UE7HW8MHIEy.svg" className="honeydewLogo2"/>
        <p className="honeydewBody">{text.intro[0]}</p>
        <p className="honeydewBody">{text.intro[1]}</p>
        <div className="honeydewDates honeydew-dark-blue">January-February 2019</div>
        <div className="honeydewSubtitle honeydew-dark-blue">WRITING or: If you hate something, don’t change it</div>
        <div className="writingDiv">
          <iframe src="https://www.youtube.com/embed/aVCBL7Ia5c4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="writingChild"></iframe>
          <p className="honeydewBody writingChild">{text.writing[0]}</p>
        </div>
        <div className="writingDiv">
          <p className="honeydewBody writingChild">{text.writing[1]}</p>
          <iframe src="https://www.youtube.com/embed/R4Y9y5IkkqA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="writingChild"></iframe>
        </div>
        <div className="honeydewDates honeydew-dark-blue">December 2019-April 2020</div>
        <div className="honeydewSubtitle honeydew-dark-blue">RECORDING or: Our accidental Joy Division collaboration</div>
        <p className="honeydewBody">{text.recording[0]}</p>
        <div className="recordingDiv">
          <iframe src="https://www.youtube.com/embed/30TMXCrl_lw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="recordingVid"></iframe>
          <iframe src="https://www.youtube.com/embed/-tIxc82D5-4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="recordingVid"></iframe>
          <iframe src="https://www.youtube.com/embed/uC84LNpj_-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="recordingVid"></iframe>
        </div>
        <p className="honeydewBody">{text.recording[1]}</p>
        <p className="honeydewBody">{text.recording[2]}</p>
        <p className="honeydewBody">{text.recording[3]}</p>
        <div className="honeydewDates honeydew-dark-blue">April-June 2020</div>
        <div className="honeydewSubtitle honeydew-dark-blue">ARTWORK or: Flora over fruit</div>
        <img src="https://ik.imagekit.io/shaibrides/Honeydew/ARTWORK_DRAFTS_hi97udz6XS6.jpg" className="honeydewArtwork" />
        <p className="honeydewBody">{text.artwork[0]}</p>
        <p className="honeydewBody">{text.artwork[1]}</p>
        <p className="honeydewBody">{text.artwork[2]}</p>
        <img src="https://ik.imagekit.io/shaibrides/Honeydew/STAR_R4DyJznT7.svg" className="star" />
        <a className="honeydewLink" href="/insta">
            STREAM NOW
        </a>
      </div>
      <Footer bgColour="dark-blue" honeydew={true} />
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
