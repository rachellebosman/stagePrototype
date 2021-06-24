import React from 'react'
import DistanceBar from '../components/DistanceBar'
import '../styles/distancePage.scss'
//import { fetchData } from '../utils/fetchData';

function DistanceLeft({ distance }) {



  const distanceLeft = (1.5 - distance)

  return (
    <div className="">


      <div className="text">
        <p> Let's keep our distance! </p>
      </div>

      <div className="text text-2">
        <p>  Only {distanceLeft} meters to go </p>
      </div>


      <div className="coffee-cups">

        <div className="coffee-cup">
          <img src="../img/coffee.svg"></img>
        </div>

        <div className="coffee-cup cup-reversed">
          <img src="../img/coffee.svg"></img>
        </div>

      </div>


      <DistanceBar distance={distance} />
    </div>
  )
}

export default DistanceLeft
