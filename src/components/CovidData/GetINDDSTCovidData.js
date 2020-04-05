import React, { Component } from 'react';
import MaterialTable from '../Tables/MaterialTable';

class GetINDCovidData extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            records : {}
        }        
        };

    componentDidMount(){
        fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
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

    getKeys = function (json) {
        return Object.keys(json);
    }

    render() {
        const {error, isLoaded, records} = this.state;
        if(error){
            return <div>Failed loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            var states_district = records.state_wise;
            console.log(states_district);
            var states=this.getKeys(states_district);
            states.map((state,index)=>{
                // columns.push({ label: key.toUpperCase(), field: key, sort: 'asc',width:220 })
                var districtData = states_district[state];
                console.log(districtData);
            });
            return(
                <React.Fragment>
                    <div>

                    </div>
                    {/* <MaterialTable data={final}></MaterialTable> */}
                </React.Fragment>
                    
            );
        }
      
    }
  }

  export default GetINDCovidData;