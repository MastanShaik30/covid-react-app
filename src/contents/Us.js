import React, { Component } from 'react';
import GetUSCovidData from '../components/CovidData/GetUSCovidData'

class Us extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="condiv">
                <h1>United States of America Data by State</h1>
                <GetUSCovidData />
            </div>
            </React.Fragment>
            )
        }
    }
    
export default Us
    