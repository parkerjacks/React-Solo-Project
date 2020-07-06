import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './App.css';
import StateCard from "./components/StateCard"
import NavBar from "./components/NavBar"
import StatePage from './pages/StatePage'
import StatebyYearPage from './pages/StatebyYearPage'



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

          <Switch>
            <Route exact path="/" component={StateCard} />
            <Route exact path="/state/:state" component={StatePage} />
            <Route path="/state/:state/:decade" component={StatebyYearPage} />
          </Switch>



        </div>

      </div>

    </Router>


  );
}

export default App;
