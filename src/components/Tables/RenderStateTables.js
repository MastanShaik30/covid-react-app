import React from "react";
import Accordion from "../Accordion";
import MaterialTable from "./MaterialTable";
import { renderToString } from 'react-dom/server';

export default props => {
    if(props.districts != undefined){ 
    var districtTable = renderToString(<MaterialTable data={props.districts}/>);
    console.log(districtTable);
    console.log('All Districts Data  = '+ JSON.stringify(props.districts));
    return(
        <Accordion
            title={props.state}
            content={districtTable}
          />
        
      );
    }
    return( <Accordion
        title={props.state}
        content="<h4>No Districts</h4>"
      />);
  }
