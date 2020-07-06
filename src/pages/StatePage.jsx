import React, { Component } from 'react'
import './StatePage.css'
import { useLocation } from "react-router"
import NYTCard from '../components/NYTCard'
import ButtonRow from "../components/ButtonRow"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import StateFacts from '../components/StateFacts.jsx'
import statefacts from '../components/statefacts1'



class StatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Statename: this.props.match.params.state,
            Cities: [],
            Smithsonian: [],
            NewYorkTimes: [],
            Statefacts: []
        }
    }

    getStateFacts = () => {
        let state = this.state.Statename

        let x = statefacts
        let findStateObj = (obj) => {
            if (state == obj.statename) {
                return obj
            }
            return
        }
        let y = x.filter(findStateObj)

        this.setState({ Statefacts: y })
    }

    getArticles = () => {
        let urlState = encodeURIComponent(this.props.match.params.state)
        fetch(`http://api.nytimes.com/svc/semantic/v2/concept/name/nytd_geo/${urlState}?fields=all&api-key=${process.env.REACT_APP_NYT_PASS}`)
            .then(res => {


                return res.json()
            }).then(data => {
                if (typeof data.results[0] !== 'undefined') {
                    this.setState({ NewYorkTimes: data.results[0].article_list.results })
                }
                else {
                    console.log("sorry")
                }
            }
            )
    }



    componentDidMount() {
        this.getArticles()
        this.getStateFacts()
    }




    render() {



        let statename = this.state.Statename;
        let statename1 = statename.replace(/\s+/g, '-');
        let NYTTimes = this.state.NewYorkTimes
        NYTTimes = NYTTimes.slice(0, 7)
        let NYTSplit = NYTTimes.map((data, index) => {

            return <NYTCard
                snippet={data.body}
                articleName={data.title}
                date={data.date}
                url={data.url}
                key={index} />
        })

        let Statef = this.state.Statefacts

        Statef = Statef.map((data, index) => {

            return <StateFacts key={index}
                abbrev={data.abbrev}
                capital={data.capital}
                dateOfStatehood={data.dateOfStatehood} />

        }

        )



        return (
            <div className="StatePage">
                <Link className="homelink" to={{ pathname: '/' }}> Back to State Selection </Link>

                <ButtonRow Statename={this.state.Statename} />

                <div className="Title1">
                    {statename}
                </div>

                <div className="toSide">
                    <img className="Stateimg" src={process.env.PUBLIC_URL + `../images/${statename1}.png`} />

                    <div> {Statef} </div>

                </div>




                <div ref={this.ArticlePlace} className="NYTArticles">
                    <div className="pic"> <img src={process.env.PUBLIC_URL + '../images/poweredby_nytimes_200c.png'} alt="" /> </div>

                    <div className="-row">
                        {NYTSplit}

                    </div>


                </div>

            </div>

        );
    }
}



export default StatePage;