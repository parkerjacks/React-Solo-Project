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
        const d = new Date();
        const currentYear = d.getFullYear();
        return (
            <Link className="State" to={`/state/${this.state.stateName}/${currentYear}`} >

                {this.props.stateName}
            </Link>
        );
    }
}

export default State;