import React from "react";
import vegaEmbed from "vega-embed"
import Record from "../Record.json"
 export default function Marep(){
    const marep_Chart={
        title:"Marep Rate",
        width:"200",
        height:"200",
        data:{
        values:Record.marep
        // values:[
        //     {"months":"202204", "periods":"19"},
        //     {"months":"202205","periods":"5"},
        //     {"months":"202206","periods":"6"}
        // ],
        },
        params:[{
            name:"color_Marep", value:"#5b9bd5"
        }],
        encoding:{
            x:{field:"months",title:"Periods",axis:{labelAngle:"0","axisColor": null,  "ticks": false,grid:false,domainColor:false}},
            y:{field:"marep_rate",type:"quantitative",title:"Marep Rate",axis:{labelAngle:"0","axisColor": null,  "ticks": false,domainColor:false}}
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
            color:{expr:"color_Marep"}
            
        }
    }
    vegaEmbed("#marep_Chart", marep_Chart, { mode: "Vega-lite", actions: false })
    return(
        <>
        <div id="marep_Chart">

        </div>
        </>
    )
 }