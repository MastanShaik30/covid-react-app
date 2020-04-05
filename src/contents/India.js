import React, { Component } from 'react';
import GetINDCovidData from '../components/CovidData/GetINDCovidData';

class India extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <div className="condiv">
                <h1>India Data by State</h1>
                <GetINDCovidData />
            </div>
            </React.Fragment>
            )
        }
    }
    
    export default India
    