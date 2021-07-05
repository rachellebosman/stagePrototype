import React, { useState, useEffect } from 'react'
import { fetchData } from '../utils/fetchData';
import DistancePage from './DistancePage';
import GreetingPage from './GreetingPage';
import DataPage from '../pages/DataPage';
import DistanceFeedbackPage from './DistanceFeedbackPage'
import '../styles/distancePage.scss'

const MainPage = () => {
    //const [randomDistance, setRandomDistance] = useState(0);
    //const [randomAmountPeople, setRandomAmountPeople] = useState(0);
    const [distance, setDistance] = useState(0)
    const [currentDistance, setCurrentDistance] = useState(0)
    const [currentAmountPeople, setCurrentAmountPeople] = useState(0)
    let number = 0;

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
    //FOR RANDOM ITEMS
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
    */

    useEffect(() => {
        const interval = setInterval(() => {
            const x = distance.map((item) => {

                if (number == item.id) {
                    setCurrentDistance(item.distances / 1000)
                    setCurrentAmountPeople(item.heatsource_amount)
                }
            })
            number = number + 1;
            if (number === 35) (
                number = 0
            )
            //console.log("number: " + number)

        }, 1000);
        return () => clearInterval(interval);
    }, [distance]);


    //controleren of er nieuw persoon bij de machine komt
    const [newPerson, setNewPerson] = useState(0);
    if (newPerson < currentAmountPeople) {
        console.log(currentAmountPeople + "is higher than " + newPerson);
        setNewPerson(currentAmountPeople)
        console.log("BEGROETING")
        return <GreetingPage />;
    }

    if (currentDistance <= 1.5 && currentAmountPeople >= 2) {
        console.log("afstand kleiner dan 1.5 namelijk: " + currentDistance + " aantal mensen: " + currentAmountPeople)
        return <DistancePage distance={currentDistance} />;
    }

    if (currentDistance >= 1.5 && currentAmountPeople >= 2) {
        console.log("GROTER " + currentDistance + " aantal mensen: " + currentAmountPeople)
        return <DistanceFeedbackPage />;
    }

    else {
        return <DataPage />
    }
    // newperson = randomAmountPeople
    // if newperson hoger dan randomAmountPeople -> groeting 

    /*
    if (randomAmountPeople === 1) {
        //return <GreetingPage />;
        console.log("een persoon bij de machine")
    }

    if ((randomDistance) >= 1.5) {
        console.log("afstand groter dan 1.5")
        //moet data scherm worden
        //return <DistanceFeedbackPage />;
    }

 */




    /*
    if (randomDistance >= 1.5 && randomPeople < 0) {
        console.log("more people")
        return <DistancePage />;
    }

    */

    //return <GreetingPage />;


    //return <DistancePage distance={currentDistance} />;
    //return <DistanceFeedbackPage distance={randomDistance} />;
}

export default MainPage
