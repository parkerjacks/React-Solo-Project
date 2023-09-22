import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import './App.css';
import StateCard from "./components/StateCard"
import StatebyYearPage from './pages/StatebyYearPage.js'



function App() {
  return (
    <Router>

      <div className="App" id="App" >

        <header>
          <div className="title"> United States Territories Study Tools </div>

          {/* <NavBar /> */}

        </header>

        <div>


        </div>


        <div>

          <Routes>
            <Route exact path="/" element={<StateCard/>} />
            {/* <Route exact path="/state/:state" component={StatePage} /> */}
            <Route path="/state/:state/:decade" element={<StatebyYearPage/>} />
          </Routes>



        </div>

      </div>

    </Router>


  );
}

export default App;
