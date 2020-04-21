import React from "react";
import liveDates from '../data/liveList';

const LiveList = () => (
    <div className="bioText">
        {liveDates.map(date => (
        <a className="row liveDiv is-dark-blue" href={date.ticketLink} >
            <div className="liveDate col-xs-4 col-lg-5">
                <h2>{date.day}</h2>
                <h4>{date.month}</h4>
            </div>
            <div className="liveInfo col-xs-8 col-lg-7">
                <div className="div-ception">
                    <h4>{date.venue}, {date.desc}</h4>
                    <h3>{date.city}</h3>
                </div>
            </div>
        </a>
        ))}
        <hr className="mobileHidden"/>
    </div>
)

export default LiveList;