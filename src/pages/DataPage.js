import React from 'react'
import '../styles/style.scss'
import '../styles/greetingPage.scss'
import { greetings } from '../utils/constants'

function DataPage({ totalPeople }) {
    //how much coffee in total based on how many people visited the machine
    const totalCoffee = totalPeople * 0.236
    return (
        <div className="container">
            <h1> Epische data </h1>
            <p> today {totalPeople} people have vistited the machiene</p>
            <p> today {totalCoffee} liter coffee  </p>
        </div>
    )
}

export default DataPage
