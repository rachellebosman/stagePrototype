import React from 'react'
import '../styles/style.scss';
//import *  as d3 from 'd3';

function DistanceBar(props) {

    const meters = props.data 
    const fullWidth = 600; 
    const distanceWidth = fullWidth / 1.5 * meters   
    
    return (
    
        <div className="distanceChart">
            <p> 0 </p>
            <svg id="bar" height="60" width="600">
                <rect x="0" y="0" width={fullWidth} height="35" fill= "lightblue"></rect>
                <rect x="0" y="0" width={distanceWidth} height="35" fill= "orange"></rect>
            </svg>
            <p> 1.5 </p>
        </div>
    )
}

export default DistanceBar
