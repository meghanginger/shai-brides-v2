import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LiveList from "../../components/LiveList";
import Footer from "../../components/footer";

const Live = () => {
  return(
    <Layout>
      <SEO title="LIVE | SHAI BRIDES" />
      <div className="is-mint-bg live-bg" >
          <h1 className="is-dark-blue liveTitle">UPCOMING SHOWS</h1>
          <div className="container">
            <LiveList />
          </div>
      </div>
      <Footer bgColour='dark-blue'/>
    </Layout>
  )
}

export default Live;