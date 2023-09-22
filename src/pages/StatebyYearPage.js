import React, { Component } from 'react'
import NYTCard from '../components/NYTCard'
import ButtonRow from "../components/ButtonRow"
import './StatebyYearPage.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import StateFactsComponent from '../components/StateFactsComponent.jsx'
import stateInfo from '../components/statefacts1'
import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function StatebyYearPage(props) {
    let { state, decade } = useParams() ;
    let territory = state
    let [articles, setArticles] = useState([])
    let [firstRender, setFirstRender] = useState(true)
    let stateDetails = stateInfo.find(obj => obj.statename = territory)


    function getYearArt() {
        let begin_date = decade + "0101"
        let end_date = decade + "1231"
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${territory}&api-key=${process.env.REACT_APP_NYT_PASS}&glocations=${state}&begin_date=${begin_date}&end_date=${end_date}`)
            .then(data => {
                return data.json()
            }).then(res => {
                try {
                    setArticles(res.response.docs.slice(0, 7))
                }
                catch {
                    console.log(res)
                }
            })
    }
    function navigateToDifferentPage() {

    }
    useEffect(() => {
        getYearArt()
    }, [decade]);


    return (
        <div className="StatebyYearPage">
            <Link className="homelink" to={{ pathname: '/' }}> Back to State Selection </Link>

            <ButtonRow Statename={territory} />
            <div className="Title">
                {territory}
            </div>

            <div className="toSide">
                <div className="stateimg" > <img src={process.env.PUBLIC_URL + `/images/${territory.replace(/\s+/g, '-')}.png`} /> </div>
                <div>
                    <StateFactsComponent
                        abbrev={stateDetails.abbrev}
                        capital={stateDetails.capital}
                        dateOfStatehood={stateDetails.dateOfStatehood} />
                </div>
            </div>



            <div className="NYTArticles">
                <div className="pic"> <img src={process.env.PUBLIC_URL + '/images/poweredby_nytimes_200c.png'} alt="" /> </div>

                <div className="-row"> {
                    articles.map((data, index) => {
                        return <NYTCard
                            articleName={data.headline.main}
                            snippet={data.abstract}
                            date={data.pub_date}
                            url={data.web_url}
                            key={index}
                        />

                    })
                    // decade
                }

                </div>


            </div>

        </div>

    );
}

export default StatebyYearPage