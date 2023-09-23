import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import StateCard from "./components/StateCard"
import StatebyYearPage from './pages/StatebyYearPage.js'



function App() {
  return (
    <Router>

      <div className="App" id="App" >

        <header>
          <div className="title"> United States Territories Study Tools </div>

        </header>

        <div>


        </div>


        <div>

          <Routes>
            <Route exact path="/" element={<StateCard/>} />
            <Route path="/state/:state/:decade" element={<StatebyYearPage/>} />
          </Routes>



        </div>

      </div>

    </Router>


  );
}

export default App;
