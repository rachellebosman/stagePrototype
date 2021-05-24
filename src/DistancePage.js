import React from 'react'
import DistanceBar from './components/DistanceBar'

function distanceLeft() {

    const metersLeft = 0.8; 

    return (
        <div className="distanceLeftPage">
            <p>  Only {metersLeft} meter to go </p>
            <DistanceBar data={metersLeft} /> 
        </div>
    )
}

export default distanceLeft
