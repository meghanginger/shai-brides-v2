import React from 'react';
import SEO from "../components/SEO";
import links from "../data/instaLinks";
import content from "../data/content-cdn";
import icons from "../data/socials-list";

const insta = () => (
    <>
        <SEO title="LINKS | SHAI BRIDES" />
        <div className="is-dark-blue-bg instaContainer">
            <a href="/">
                <img className="instaLogo" src={content.Logos.white} alt="" />
            </a>
            <div className="instaSocials">
                {icons.map(icon => (
                    <a href={icon.href} label={icon.label}>
                        <img src={icon.location} alt="" />
                    </a>
                ))}
            </div>
            {links.map(link => (
                <a className="instaLink" href={link.Link}>
                    {link.Text}
                </a>
            ))}
        </div>
    </>
)

export default insta;