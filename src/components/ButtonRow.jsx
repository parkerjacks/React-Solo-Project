import React, { Component } from 'react'
import './ButtonRow.css'
import MyButton from './MyButton'





class ButtonRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: [],
            UsState: this.props.Statename,

        }
    }
    yearButtons = () => {
        let x = 1850
        let y = 1900
        let z = []
        for (let i = 0; i <= 16; i++) {
            x += 10
            z.push(x)

        }
        this.setState({
            years: z
        })
    }

    componentDidMount() {
        this.yearButtons()

    }

    render() {
        let UsState = this.state.UsState 
        



        let button = this.state.years.map((number, index) => {
            return <MyButton
                year={number}
                key={index}
                UsState={this.state.UsState}

            />
        })

        

        return (
            <div className="ButtonRow">
                {button}
            </div>

        );
    }
}

export default ButtonRow;