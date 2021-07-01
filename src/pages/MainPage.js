import React, { useState, useEffect } from 'react'
import { fetchData } from '../utils/fetchData';
import DistancePage from './DistancePage';
import GreetingPage from './GreetingPage';
//
import DistanceFeedbackPage from './DistanceFeedbackPage'
import '../styles/distancePage.scss'

const MainPage = () => {
    const [distance, setDistance] = useState(0)
    const [randomDistance, setRandomDistance] = useState(0);
    const [randomAmountPeople, setRandomAmountPeople] = useState(0);
    const [randomItem, setRandomItem] = useState(0);

    //links to API 
    const URL = "dataNew.json";
    const URL2 = "https://raspberry-pi-api.azurewebsites.net/test ";

    //fetching Data from API
    useEffect(() => {
        fetchData(URL).then((response) => {
            const dataFromFetch = response.items.map((item) => {
                //return item.distances / 1000
                return item
            })
            setDistance(dataFromFetch)
        });
    }, []);

    /*
    useEffect(() => {
        const interval = setInterval(() => {
            const random = distance[Math.floor(Math.random() * distance.length)];
            if (random === undefined) return;
            console.log(random.distances)
            //setRandomItem(random);
            setRandomDistance(random.distances / 1000)
            setRandomAmountPeople(random.heatsource_amount)
        }, 2000);
        return () => clearInterval(interval);
    }, [randomItem]);
    */


    useEffect(() => {
        const interval = setInterval(() => {
            const randomDistance = distance[Math.floor(Math.random() * distance.length)];
            if (randomDistance === undefined) return;
            //setRandomDistance(randomDistance);
            setRandomDistance(randomDistance.distances / 1000)
            setRandomAmountPeople(randomDistance.heatsource_amount)
        }, 1000);
        return () => clearInterval(interval);
    }, [distance]);

    console.log("aantal mensen: " + randomAmountPeople)
    console.log("afstand: " + randomDistance)

    if (randomAmountPeople === 1) {
        return <GreetingPage />;
    }

    if ((randomDistance) >= 1.5) {
        console.log("afstand groter dan 1.5")
        //moet data scherm worden
        return <DistanceFeedbackPage />;
    }

    if ((randomDistance) <= 1.5) {
        //console.log("afstand kleiner dan 1.5")
        return <DistancePage distance={randomDistance} />;
    }



    /*
    if (randomDistance >= 1.5 && randomPeople < 0) {
        console.log("more people")
        return <DistancePage />;
    }

    */

    //return <GreetingPage />;


    //return <DistancePage distance={randomDistance} />;
    //return <DistanceFeedbackPage distance={randomDistance} />;
}

export default MainPage
