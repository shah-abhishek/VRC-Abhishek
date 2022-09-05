import React from "react";
import vegaEmbed from "vega-embed"
import Record from "../Record.json"
 export default function URR_Rate(){
    const urr_Chart={
        title:"URR Rate",
        width:"200",
        height:"200",
        data:{
        values:Record.URR
        // values:[
        //     {"months":"202204", "periods":"19"},
        //     {"months":"202205","periods":"5"},
        //     {"months":"202206","periods":"6"}
        // ],
        },
        encoding:{
            x:{field:"months",title:"Period", axis:{labelAngle:"0","axisColor": null,  "ticks": false,grid:false,domainColor:false}},
            y:{field:"removals",type:"quantitative",title:"URR Rate",axis:{labelAngle:"0","axisColor": null,  "ticks": false,domainColor:false}}
        },
        "config": {
            "view": {
               "stroke": "transparent"
            }
          },
        params:[{
            name:"color_URR", value:"#5b9bd5"
        }],
        mark:{
            type:"line",
            point:{
                display:true,
                shape:"triangle",
                size:"200"
            },
            tooltip:true,
            color:{expr:"color_URR"},
        }
    }
    vegaEmbed("#urr_Chart", urr_Chart, { mode: "Vega-lite", actions: false })
    return(
        <>
        <div id="urr_Chart">

        </div>
        </>
    )
 }