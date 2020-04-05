import React, { Component } from 'react';
import MaterialTable from '../Tables/MaterialTable';

class GetUSCovidData extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            records : []        
        };
    }

    componentDidMount(){
        fetch("https://covid19-data.p.rapidapi.com/us", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid19-data.p.rapidapi.com",
                "x-rapidapi-key": "088854f95bmsh82d19f9ac952d36p1da956jsn2401cfa29608"
            }
        })
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    records : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        );
    }

    render() {
        const {error, isLoaded, records} = this.state;
        if(error){
            return <div>Failed loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            var final = records.list;
            console.log(final);
            return(
                <React.Fragment>
                    <MaterialTable data={final}></MaterialTable>
                </React.Fragment>
                    
            );
        }
      
    }
  }

  export default GetUSCovidData;