import React from "react";
import links from "../data/spotifyLinks";

const SpotifyPlayer = ({ link }) => (
    <iframe src={links[link]} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
);

export default SpotifyPlayer;