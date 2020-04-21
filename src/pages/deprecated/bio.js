import React from "react";
import Layout from '../../components/layout';
import BioText from "../../data/bio-text";
import Footer from "../../components/footer";

const Bio = () => (
    <Layout>
        <h1 className="joieHeader is-light-blue-bg is-black">ABOUT THE BAND</h1>
        <div className="bioText is-light-blue-bg container-fluid">
            {BioText.map(para => (
                    <p className="bioPara">
                        {para.Text}
                    </p>
                ))}
        </div>
        <Footer bgColour="dark-blue" />
    </Layout>
)

export default Bio;
