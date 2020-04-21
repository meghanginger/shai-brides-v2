import React from "react";
import Layout from "./layout";
import SpotifyPlayer from "./SpotifyPlayer";
import contentURLs from "../data/content-cdn";
import joieQuotes from "../data/joieQuotes";

const Joie = () => (
    <>
        <div className="joieVideo">
            <video text-align="middle" loop width="200%" muted autoPlay className="joieVideo" playsInline>
                    <source src={contentURLs.Joie.Video} type="video/mp4" />
            </video>
        </div>
        <div className="is-j-blue-bg joieContentDiv">
            <div className="is-j-blue-bg container row override" >
                <div className="col-sm-5 col-md-5 col-xs-12 imageSpotifyWrapper">
                    <img src={contentURLs.Joie.Album} alt="" className="joieImage"/>
                    <SpotifyPlayer className="spotifyPlayer" link="joie" />
                </div>
                <div className="col-sm-7 col-md-7 col-xs-12 quotesWrapper">
                    {joieQuotes.map(quote => (
                        <div className="quoteWrapper" id={quote.quote}>
                            <h5>{`'${quote.quote}'`}</h5>
                            <h6>{quote.author}</h6>
                        </div>
                    ))}
        
                </div>
            </div>
            <h3 className="pad-1" >OUT NOW ON ALL STREAMING PLATFORMS</h3>
            <div className="lineJoie">
                <hr />
            </div>
        </div>
    </>
    )

export default Joie;
