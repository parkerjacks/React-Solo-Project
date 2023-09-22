import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './MyButton.css'
import { Link } from 'react-router-dom'


class MyButton extends Component {
    constructor(props) {
        super(props);
        const year = this.props.year
        let yearsArray = []
        for (let i = 1; i < 10; i++) {
            yearsArray.push(year + i)
        }
        this.state = {
            year: this.props.year,
            UsState: this.props.UsState,
            yearsArray: yearsArray
        }
    }

    render() {
        return (
            <div className='decade_button'>
                <Link reloadDocument to={`/state/${this.state.UsState}/${this.state.year}`} 
                    className="mybuttonlink"
                >
                    <Button className="mybutton" variant="secondary" > {this.state.year}</Button >

                </Link>
                <div className='button_dropdown_menu'>
                    {this.state.yearsArray.map(num => {
                        return <Link reloadDocument  to={`/state/${this.state.UsState}/${num}`}
                            className="button_dropdown_link"
                        >
                            <div className="button_dropdown_link_button" variant="secondary" >  {num} </div >

                        </Link>
                    })}
                </div>
            </div>
        );
    }
}

export default MyButton;