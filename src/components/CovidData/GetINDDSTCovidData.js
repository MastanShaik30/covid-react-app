import React, { Component } from 'react';
import GenerateComponents from '../Tables/GenerateComponents';

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

    getDistrictsData = function (districts) {
        var allDistrictsData=[];
        var districtKeys = this.getKeys(districts);
        districtKeys.map((district,index) =>{
            var districtData ={};
            districtData.district = district;
            districtData.confirmed = districts[district].confirmed;
            allDistrictsData.push(districtData);
        });
        return allDistrictsData;
    }

    getStateData = function(states_district,state){
        var stateData={};
        stateData.state=states_district[state].state;
        stateData.confirmed = states_district[state].confirmed;
        stateData.deaths = states_district[state].deaths;
        stateData.lastupdatedtime = states_district[state].lastupdatedtime;
        if(states_district[state].district != undefined){
        stateData.districts =this.getDistrictsData(states_district[state].district);
        }
        return stateData;
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
            var allStateData=[];
            var states=this.getKeys(states_district);
            states.map((state,index)=>{
                allStateData.push(this.getStateData(states_district,state));
                
            });
            console.log('All States Data  = '+ JSON.stringify(allStateData));
            return(
                
                        <div>
                          {allStateData.map(state => GenerateComponents(state))}
                        </div>
                    
            );
            
        }
      
    }
  }

  export default GetINDCovidData;