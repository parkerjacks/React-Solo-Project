import React, { Component } from 'react'
import './State.css'

class State extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stateName: this.props.stateName
         }
    }
    render() { 

        console.log(this.props)

        return ( 

                    <div className="State"> {this.props.stateName} </div> 
        




           


         );
    }
}
 
export default State;