import React from 'react'
import { useState } from 'react'

function Home(props) {
    

  return (
    <div>
        <h1>Welcome to the Calculator</h1>
        <p>Waiting to Connect the numbers to the Placeholder.</p>
    {props.Name}<br/>
    {props.Age}<br/>
    {props.Gender}<br/>
    </div>
  )
}
export default Home