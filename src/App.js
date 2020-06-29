import React from 'react';

import './App.css';  
import StateCard from "./components/StateCard" 
import NavBar from "./components/NavBar"

function App() {
  return (
    <div >

      <header>
        <div className="title"> Wild</div> 
       <NavBar/>

      </header>


      <div> <StateCard/>  </div>

    </div>

  );
}

export default App;
