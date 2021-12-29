import React from 'react';
import {Waypoint} from "react-waypoint";

const WaypointWrapper = ({className, children}) => {
    const toggleActive = () => {
        document.querySelector(`.${className}`).classList.toggle('inactive-block');
    }

    return (
        <Waypoint
            onEnter={toggleActive}
            onLeave={toggleActive}
        >
            {children}
        </Waypoint>
    );
};

export default WaypointWrapper;