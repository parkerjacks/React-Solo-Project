import React, { Component } from 'react'
import './NYTCard.css'



class NYTCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleName: this.props.articleName,
            date: this.props.date,
            url: this.props.url, 
            body: this.props.snippet
        }
    }
    render() { 
          let date = this.state.date 
        

        return (
            <div className="NYTCard">

                <div className="artTitle"> {this.state.articleName} </div>
                <div className="artImg" > {this.state.body} </div>
                <div className="artDate">  {date} </div>
                <a  target="_blank" href={`${this.state.url}`}> NewYorkTimes Article Link  </a>

      




            </div>


        );
    }
}

export default NYTCard;