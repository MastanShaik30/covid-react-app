import React, { Component } from 'react';

import Tablejson from '../Table';
// import { MDBDataTable } from 'mdbreact';

class GetCovidData extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            records : []        
        };
    }

    componentDidMount(){
        // Using europe data
        // this return covid data 
        // fetch("https://opendata.ecdc.europa.eu/covid19/casedistribution/json/",{ 
            fetch("https://jsonplaceholder.typicode.com/photos",{  
            method: 'GET',
            headers:{
                'Access-Control-Allow-Origin': '*'
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
        console.log(JSON.stringify(records));
        if(error){
            return <div>Failed loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                    <Tablejson data={records}/>
                // <MDBDataTable striped bordered hover data={records} />
            );
        }
      
    }
  }

  export default GetCovidData;