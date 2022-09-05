import React from "react";
import vegaEmbed from "vega-embed"
import Record from "../Record.json"
export default function Chart4(){
    const chart4={
        width:"200",
        height:"200",
        title:"8767-300-Amazon ATA-2822 Fuel Pump- Primary Root Cause",
        data:{
            values:Record.chart4
        },
        mark:{
            type:"arc",
            
        },
        encoding:{
            theta:{field:"total",type:"quantitative",title:"hhh",},
            color:{field:"modes",title:null},
            tooltip:[
            {field:"modes"},
            {field:"total"}
            ]
        }
    }
    vegaEmbed("#chart4", chart4, { mode: "Vega-lite", actions: false })
    return(
        <div id="chart4"></div>
    )
}