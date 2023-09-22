import React, { Component } from 'react'

class StateFactsComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (

            <div className="StateFacts"> 
            <div className> Abbreviation: {this.props.abbrev} </div>
            <div className>Capital: {this.props.capital} </div>
            <div className> Date of Statehood: {this.props.dateOfStatehood } </div>
             </div>


          );
    }
}
 
export default StateFactsComponent;