import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Footer from "../components/footer";

const lost = () => (
  <>
    <SEO title="404" />
    <div className="is-grey is-dark-blue-bg errorContainer">
      <div className="errorBg">
        <h1 className="joieHeader is-dark-blue-bg is-white">404 error: You look lost...</h1>
        <h5 className="is-white errorBody">
          Are you snooping for a mystery page? There's nothing here pal.
        </h5>
        <Link className="homeLink">
          <button className="btn margin-3-t">Take me home</button>
        </Link>
      </div>
      <div className="errorFooter">
        <Footer bgColour="new-blue"/>
      </div>
    </div>
  </>
);

export default lost;