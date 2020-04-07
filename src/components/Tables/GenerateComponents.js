import React from "react";
import RenderStateTables from "./RenderStateTables";


const GenerateComponents = {
  renderStateTable : RenderStateTables
};

export default states => {
    return React.createElement(GenerateComponents['renderStateTable'], {
      state : states.state,
      districts: states.districts
    });
  }