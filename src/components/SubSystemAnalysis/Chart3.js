import { RecordVoiceOver } from "@mui/icons-material";
import React from "react";
import vegaEmbed from "vega-embed";
import Record from '../Record.json'
export default function Chart3(){
    const chart3={
        width:"200",
        height:"200",
        title:"8767-300-Amazon ATA-2822 Failure Modes",
        data:{
            values:Record.chart3
        },
        mark:{
            type:"arc",
            
        },
        encoding:{
            theta:{field:"total",type:"quantitative"},
            color:{field:"modes",title:null},
            tooltip:[
            {field:"modes"},
            {field:"total"}
            ]
        }
    }
    vegaEmbed("#chart3", chart3, { mode: "Vega-lite", actions: false })
    return(
        <>
        <div id="chart3">

        </div>
        </>
    )
}