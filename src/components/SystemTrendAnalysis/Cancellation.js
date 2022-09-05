import React from "react";
import vegaEmbed from "vega-embed"
import Record from "../Record.json"
 export default function Cancellation(){
    const cancellation_Chart={
        title:"Cancellation Rate",
        width:"200",
        height:"200",
        data:{
        values:Record.cancellation
        // values:[
        //     {"months":"202204", "periods":"19"},
        //     {"months":"202205","periods":"5"},
        //     {"months":"202206","periods":"6"}
        // ],
        },
        
        params:[{
            name:"color_Cancellation", value:"#5b9bd5"
        }],
        encoding:{
            x:{field:"months",title:"Period", axis:{labelAngle:"0","axisColor": null,  "ticks": false,grid:false,domainColor:false}},
            y:{field:"cancellation_rate",type:"quantitative",title:"Cancellation Rate",axis:{labelAngle:"0","axisColor": null,  "ticks": false,domainColor:false}}
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
            color:{expr:"color_Cancellation"}
            
        }
    }
    vegaEmbed("#cancellation_Chart", cancellation_Chart, { mode: "Vega-lite", actions: false })
    return(
        <>
        <div id="cancellation_Chart">

        </div>
        </>
    )
 }