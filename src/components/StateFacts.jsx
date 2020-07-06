import React, { Component } from 'react'

class StateFacts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
 
export default StateFacts;