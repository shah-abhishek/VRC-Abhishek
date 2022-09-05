import React from "react";
import vegaEmbed from "vega-embed"
import Record from "../Record.json"
 export default function pirep(){
    const pirep_Chart={
        title:"Pirep Rate",
        width:"200",
        height:"200",
        data:{
        values:Record.pirep
        // values:[
        //     {"months":"202204", "periods":"19"},
        //     {"months":"202205","periods":"5"},
        //     {"months":"202206","periods":"6"}
        // ],
        },
        "config": {
            "view": {
               "stroke": "transparent"
            }
          },
        params:[{
            name:"color_Pirep", value:"#5b9bd5"
        }],
        encoding:{
            x:{field:"months",title:"Period", axis:{labelAngle:"0","axisColor": null,  "ticks": false,domainColor:false}},
            y:{field:"pirep_rate",type:"quantitative",title:"Pirep Rate",axis:{labelAngle:"0","axisColor": null,  "ticks": false,domainColor:false}}
        },
        mark:{
            type:"line",
            point:{
                display:true,
                shape:"triangle",
                size:"200"
            },
            tooltip:true,
            color:{expr:"color_Pirep"}
        }
    }
    vegaEmbed("#pirep_Chart", pirep_Chart, { mode: "Vega-lite", actions: false })
    return(
        <>
        <div id="pirep_Chart">

        </div>
        </>
    )
 }