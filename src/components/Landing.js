import React from 'react';
import HomeImage from "./HomeImage";
import imageURLs from "../data/content-cdn";
const isMobile = typeof window !== 'undefined' && window.innerWidth  < 480;
const bgImage = isMobile ? "Mobile" : "Desktop";

const Landing = ({data}) => (
    <>
        <div className="indexContainer">
        <HomeImage data={data} />
        </div>
        <div className={`logoHomeDiv${bgImage}`}>
                <img src={imageURLs.Logos.white} className={`logoHome${bgImage}`} />
            </div>
        <div className={`arrowHomeDiv${bgImage}`}>
        <a href='#live' >
            <img src={imageURLs.Icons["Down-arrow"]} className={`downIcon${bgImage}`} />
        </a>
        </div>
    </>
)

export default Landing;