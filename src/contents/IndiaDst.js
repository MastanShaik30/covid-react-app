import React, { Component } from 'react';
import GetINDDSTCovidData from '../components/CovidData/GetINDDSTCovidData';

class IndiaDst extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <div className="condiv lesspad">
                <h1>India Data by State</h1>
                <GetINDDSTCovidData />
            </div>
            </React.Fragment>
            )
        }
    }
    
    export default IndiaDst
    