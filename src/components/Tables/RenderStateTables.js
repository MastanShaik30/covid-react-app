import React from "react";
import Accordion from "../Accordion";
import DTable from "./Table";
import { renderToString } from 'react-dom/server';

export default props => {
    if(props.districts != undefined){ 
    console.log('All Districts Data  = '+ JSON.stringify(props.districts));
    var table = renderToString(<DTable data={props.districts}/>);
    console.log(table)
    var list="<h4>Confirmed</h4></br><ul>";
    props.districts.map((district,index) =>{
      list += "<li><span>"+district.district+"</span> : <span>"+district.confirmed+"</span></li>";
    });
    list+="</ul>";
    return(
        <Accordion
            title={props.state}
            content={table}
          />
        
      );
    }
    return( <Accordion
        title={props.state}
        content="<h4>No Districts</h4>"
      />);
  }
