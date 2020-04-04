import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';

class Tablejson extends Component {
    
    constructor(props){
      super(props);
      this.getHeader = this.getHeader.bind(this);
      // this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
      return Object.keys(this.props.data[0]);
    }
    
    getHeader = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
      })
    }
    
    // getRowsData = function(){
    //   var items = this.props.data;
    //   var keys = this.getKeys();
    //   return items.map((row, index)=>{
    //     return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
    //   })
    // }

    getColumns = function(){
      var keys = this.getKeys();
      var columns=[];
      keys.map((key,index)=>{
          columns.push({label:key.toUpperCase(), field:key, sort:'asc', width:'250'})
      })
      console.log(JSON.stringify(columns));
      return columns;
    }

    getRows = function(){
      var items = this.props.data;
      var rows = items;
      console.log(JSON.stringify(rows));
      return rows
    }

    getData = function(){
      var data = {columns:this.getColumns(),rows:this.getRows()}
      console.log(JSON.stringify(data));
      return data;
    }


    
    render() {
        return (
          // <div>
          //   <table>
          //   <thead>
          //     <tr>{this.getHeader()}</tr>
          //   </thead>
          //   <tbody>
          //     {this.getRowsData()}
          //   </tbody>
          //   </table>
          // </div>
          <MDBDataTable
              striped
              bordered
              small
              data={this.getData()}
            />
        );
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}

export default Tablejson;