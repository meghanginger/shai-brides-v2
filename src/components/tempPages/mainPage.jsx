import React from "react"
import Layout from "../Layout"
import SEO from "../SEO"
import Joie from "../Joie"
import Tokyo from "../Tokyo"
import Bio from "../Bio";
import Footer from "../Footer";
import ScrollAnchor from "../ScrollAnchor";
import Landing from "../Landing";
import Live from "../Live";
// import { configureAnchors } from 'react-scrollable-anchor';
//configureAnchors({scrollDuration: 600})

const MainPage = ({ data }) => (
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
 
export default MainPage;
