import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const ScrollAnchor = ({linkId}) => (
    <ScrollableAnchor id={linkId}>
      <div className="emptyDiv" />
    </ScrollableAnchor>
)

export default ScrollAnchor;