import React from 'react';
import SEO from "../components/SEO";
import links from "../data/epk/epkMenu";
import content from "../data/content-cdn";
import icons from "../data/socials-list";

const epkLinks = () => (
    <>
        <SEO title="ELECTRONIC PRESS KITS | SHAI BRIDES" />
        <div className="is-dark-blue-bg instaContainer">
            <a href="/">
                <img className="instaLogo" src={content.Logos.white} alt="" />
            </a>
            <h1 className="genericMenuHeader">ELECTRONIC PRESS KITS</h1>
            {links.map(link => (
                <a className="instaLink" href={link.Link}>
                    {link.Text}
                </a>
            ))}
            <div className="instaSocials genericSocialsWrapper">
                {icons.map(icon => (
                    <a href={icon.href} label={icon.label}>
                        <img src={icon.location} alt="" />
                    </a>
                ))}
            </div>
        </div>
    </>
)

export default epkLinks;