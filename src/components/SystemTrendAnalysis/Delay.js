import React from "react";
import vegaEmbed from "vega-embed"
import Record from "../Record.json"
 export default function Delay(){
    const delay_Chart={
        title:"Delay Rate",
        width:"200",
        height:"200",
        data:{
        values:Record.delay
        // values:[
        //     {"months":"202204", "periods":"19"},
        //     {"months":"202205","periods":"5"},
        //     {"months":"202206","periods":"6"}
        // ],
        },
        params:[{
            name:"color_Delay", value:"#5b9bd5"
        }],
        encoding:{
            x:{field:"months",title:"Period", axis:{labelAngle:"0","axisColor": null,  "ticks": false,grid:false,domainColor:false}},
            y:{field:"delay_rate",type:"quantitative",title:"Delay Rate",axis:{labelAngle:"0","axisColor": null,  "ticks": false,domainColor:false}}
        },
        "config": {
            "view": {
               "stroke": "transparent"
            }
          },
       
        mark:{
            type:"line",
            point:{
                display:true,
                shape:"triangle",
                size:"200"
            },
            tooltip:true,
            color:{expr:"color_Delay"}
        }
    }
    vegaEmbed("#delay_Chart", delay_Chart, { mode: "Vega-lite", actions: false })
    return(
        <>
        <div id="delay_Chart">

        </div>
        </>
    )
 }