import React from 'react';
import imageURLs from "../data/content-cdn";
import { Link } from "gatsby";

const Footer = ({ bgColour }) => (
    <div className={`is-${bgColour}-bg footerBg`}>
        <Link to="/">
            <img src={imageURLs.Logos.white} className="footerLogo" />
        </Link>
        <div className="footerIconDiv">
                <a href="https://www.instagram.com/shaibrides">
                  <img src={require("../icons/insta.svg")} />
                </a>
                <a href="https://www.youtube.com/channel/UCUfSV1sIHcMBEou0r5JcpnQ">
                  <img src={require("../icons/youtube.svg")} />
                </a>
                <a href="https://open.spotify.com/artist/4ubmraLEMNqkNnWkvnq0a5?si=3qRrLeXzTMuBGSVmSG4jHg">
                  <img src={require("../icons/spotify.svg")} />
                </a>
                <a href="mailto:shaibrides@gmail.com">
                  <img src={require("../icons/mail.svg")} />
                </a>
                <a href="https://www.facebook.com/shaibrides">
                  <img src={require("../icons/facebook.svg")} />
                </a>
              </div>
    </div>
);

export default Footer;