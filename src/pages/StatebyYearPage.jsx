import React, { Component } from 'react'
import NYTCard from '../components/NYTCard'
import ButtonRow from "../components/ButtonRow"
import './StatebyYearPage.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom' 
import StateFacts from '../components/StateFacts.jsx'
import statefacts from '../components/statefacts'

class StatebyYearPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: this.props.match.params.state,
            decade: "",
            articles: [] ,
            StateFacts: []

        }
    }
    
    getStateFacts = () => {
        let state = this.state.state

        let x = statefacts
        let findStateObj = (obj) => {
            if (state == obj.statename) {
                return obj
            }
            return
        }
        let y = x.filter(findStateObj)
        
        this.setState({StateFacts: y}) 
        console.log(y)
    } 
   

    getYearArt(e) {

      
        let begin_date = this.props.match.params.decade

        begin_date = begin_date + "0101"
       
        let end_date = this.props.match.params.decade
        end_date = parseInt(end_date) + 9
        end_date = end_date.toString()
        end_date = end_date + "1231"
        
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.state}&api-key=${process.env.REACT_APP_NYT_PASS}&glocations=${this.state.state}&begin_date=${begin_date}&end_date=${end_date}`)
            .then(data => {
                return data.json()
            }).then(res => {

                
                this.setState({
                    decade: this.props.match.params.decade,
                    articles: res.response.docs
                })

            }




            )

    }
    componentDidMount() {
        this.getYearArt()
        this.getStateFacts()
    }

    render() {
        let statename = this.state.state 
       let statename1 = statename.replace(/\s+/g, '-');
        let articlesJSX = this.state.articles
        articlesJSX = articlesJSX.slice(0, 7)
        let decadeSplit = articlesJSX.map((data, index) => {
            return <NYTCard
                articleName={data.headline.main}
                snippet={data.abstract}
                date={data.pub_date}
                url={data.web_url}
                key={index}
            />

        }) 
        let Statef = this.state.StateFacts 
        
        
        Statef = Statef.map( (data, index) => {  

            return <StateFacts key = {index} 
            abbrev = { data.abbrev}
            capital ={data.capital}
            dateOfStatehood = {data.dateOfStatehood} />
         
        }

        )


        return (
            <div className="StatebyYearPage">
                <Link to={{ pathname: '/' }}> Back to State Selection </Link>

                <ButtonRow Statename={this.state.state} />
                <div className="Title">
                    {statename}

                </div>
                <div className="stateimg" > <img src={process.env.PUBLIC_URL + `/images/${statename1}.png`} /> </div>
                <div> {Statef} </div>
                <div className="NYTArticles">
                    <div className="pic"> <img src={process.env.PUBLIC_URL + '/images/poweredby_nytimes_200c.png'} alt="" /> </div>

                    <div className="-row"> {decadeSplit}  </div>


                </div>

            </div>

        );
    }
}

export default StatebyYearPage;