// probeer echt linting toe te voegen en let op je IDE, als er blauwe streepjes ergens onder staan moet je daar wat mee
import React, { useState } from 'react'
// deze imports heb ik eerder gezien ;)
import '../styles/style.scss';
import '../App.scss';

function DistanceBar({ data }) {

    const fullWidth = 600;
    const distanceWidth = fullWidth / 1.5 * data





    return (

        <div className="distanceChart">
            <p> 0 </p>
            <svg id="bar" height="60" width="600">
                <rect x="0" y="0" width={fullWidth} height="35" fill="lightblue"></rect>
                <rect className="svg-animation" x="0" y="0" width={distanceWidth} height="35" fill="orange"></rect>
            </svg>
            <p> 1.5 </p>
        </div>


    )
}

export default DistanceBar
