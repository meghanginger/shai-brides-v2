import React from "react";
import SpotifyPlayer from "./SpotifyPlayer";
import contentURLs from "../data/content-cdn";
import tokyoQuotes from "../data/tokyoQuotes";

export default () => (
    <>
        <div className="joieVideo">
            <video text-align="middle" loop width="200%" muted autoPlay className="joieVideo" playsInline>
                <source src={contentURLs.Tokyo.Video} type="video/mp4" />
            </video>
        </div>
        <div className="is-light-blue-bg joieContentDiv">
            <div className="is-light-blue-bg container row override" >
                <div className="col-sm-4 col-md-5 col-xs-12 imageSpotifyWrapper tokyoSpotifyWrapper">
                    <img src={contentURLs.Tokyo.Album} alt="" className="joieImage tokyoImage"/>
                    <SpotifyPlayer className="spotifyPlayer" link="tokyo" />
                </div>
                <div className="col-sm-8 col-md-7 col-xs-12 quotesWrapper">
                    {tokyoQuotes.map(quote => (
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
