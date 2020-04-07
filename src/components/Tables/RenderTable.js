import React from "react";
import MaterialTable from "./MaterialTable";

export default props => { 
    console.log('Props'+props);
    return(
        <div>
        <h1>props.district</h1>
        <h1>props.confirmed</h1>
        </div>
        
      );
    }
