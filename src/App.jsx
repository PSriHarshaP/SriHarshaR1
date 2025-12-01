import { useState } from 'react';
import './App.css'
import Page1 from './Components/Page1.jsx' 
import "./Components/Page1.css"

function App() {
  const userName = "Sri";
  const userAge = 22;
  const UserGender = "Male";

  return(
  
      <div>
        <Page1 />
      </div>
  )
}

export default App
