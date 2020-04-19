import React, { Component } from 'react';
import GenerateMap from '../components/Map/GenerateMap';



class Map extends Component {
    render() {
        return (
            <div className="condiv lesspad">
                <GenerateMap/>
            </div>
            )
        }
    }


export default Map