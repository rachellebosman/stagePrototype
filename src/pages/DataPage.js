import React from 'react'
import '../styles/style.scss'
import '../styles/dataPage.scss'

function DataPage({ totalPeople }) {
    //how much coffee in total based on how many people visited the machine
    const totalCoffee = totalPeople * 0.236

    return (
        <div className="container2">
            <div className="cup-container">
                <p className="info-text"> today {totalCoffee} liter coffee had been made  </p>
                <div className="coffee-cup">
                    <img src="../img/coffee.svg"></img>
                </div>
            </div>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6e4d2f" fill-opacity="1" d="M0,192L40,208C80,224,160,256,240,234.7C320,213,400,139,480,128C560,117,640,171,720,181.3C800,192,880,160,960,133.3C1040,107,1120,85,1200,96C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <div className="solidColor"> </div>
        </div >
    )
}

export default DataPage
