import React from 'react';
import links from "../data/instaLinks";
import content from "../data/content-cdn";
import icons from "../data/socials-list";

const insta = () => (
    <div className="is-dark-blue-bg instaContainer">
        <img className="instaLogo" src={content.Logos.white} />
        <div className="instaSocials">
            {icons.map(icon => (
                <a href={icon.href} label={icon.label}>
                    <img src={icon.location} />
                </a>
            ))}
        </div>
        {links.map(link => (
            <a className="instaLink" href={link.Link}>
                {link.Text}
            </a>
        ))}
    </div>
)

export default insta;