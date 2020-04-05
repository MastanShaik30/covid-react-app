import React, { Component } from 'react';
import GetAllCountriesCovidData from '../components/CovidData/GetAllCountriesCovidData'


class World extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="condiv">
                    <h1>Total World Data by Country</h1>
                    <GetAllCountriesCovidData />
                </div>
                
            </React.Fragment>
            )
        }
    }
    
export default World
    