import React from "react";
import PropTypes from 'prop-types';
import links from "../data/spotifyLinks";

const SpotifyPlayer = ({ link, songName }) => (
    <iframe src={links[link]} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" title={`${songName} Spotify player`} />
);

SpotifyPlayer.propTypes = {
    link: PropTypes.string.isRequired,
}

export default SpotifyPlayer;