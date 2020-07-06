import React, { Component } from 'react'
import './State.css' 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateName: this.props.stateName
        }
    }
    render() {

        

        return (
            <Link className="State" to= { 
                {
                    pathname: `/state/${this.state.stateName}`, 
                    state: { 
                          stateName:this.props.stateName
                    }
                }
            }
            
            
            >

                {this.props.stateName}



            </Link>











        );
    }
}

export default State;