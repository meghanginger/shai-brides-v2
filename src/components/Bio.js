import React from "react";
import BioText from "../data/bio-text";

export default () => (
  <>
    <h1 className="joieHeader is-light-blue-bg is-dark-blue">ABOUT THE BAND</h1>
    <div className="bioText is-light-blue-bg container-fluid">
      {BioText.map(para => (
        <p className="bioPara">
          {para.Text}
        </p>
      ))}
      <hr />
    </div>
  </>
);