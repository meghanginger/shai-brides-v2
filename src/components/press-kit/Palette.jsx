import React from 'react';

const Palette = ({ campaign, colors }) => (
  <div className="paletteContainer">
    {
      colors.map(color => (
        <div className={`${campaign}-${color}-bg paletteColor`} />
      ))
    }
  </div>
);

export default Palette;
