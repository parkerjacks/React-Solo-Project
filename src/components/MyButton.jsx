import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './MyButton.css'
import { Link } from 'react-router-dom'


class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: this.props.year,
            UsState: this.props.UsState

        }

    }

    render() {
        const year = this.state.year
   




        return (
            <Link to={
                {
                    pathname: `/state/${this.state.UsState}/${this.state.year}`,
                    state: {
                        year: this.state.year,
                        UsState: this.state.UsState
                    }

                }
            } >

                <Button className="mybutton" variant="secondary" > {year}</Button >

            </Link>

        );
    }
}

export default MyButton;