import React from 'react';
import SEO from '../../components/SEO';
import Palette from '../../components/press-kit/Palette';

const honeydewEpk = () => (
    <>
        <SEO title="HONEYDEW PRESS KIT | SHAI BRIDES" />
        <div className="honeydew-pink-bg stdBg">
            <div className="stdFlexContainer container-fluid">
            <h1 className="honeydewLogo honeydew-dark-blue">honey<i>dew</i></h1>
            <Palette campaign="honeydew" colors={["red", "pink", "green", "light-blue", "dark-blue"]}/>
        </div>
        </div>
    </>
);

export default honeydewEpk;