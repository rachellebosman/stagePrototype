import React from 'react'
import DistanceBar from '../components/DistanceBar'
import { fetchData } from '../utils/fetchData';

function DistanceLeft({ distance }) {

  return (
    <div className="distanceLeftPage">
      <p>  Only {distance} meter to go </p>
      <DistanceBar distance={distance} />
    </div>
  )
}

export default DistanceLeft
