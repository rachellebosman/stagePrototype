import React from 'react'
import '../styles/style.scss'
import {greetings} from '../utils/constants'

function GreetingPage() {

    
        const  randomGreeting = greetings[Math.floor(Math.random()*greetings.length)];
   
  
    return (  
            <h1 className="greeting"> {randomGreeting}</h1>
    )
}

export default GreetingPage
