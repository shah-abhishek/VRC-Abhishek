import React from "react";
import vegaEmbed from "vega-embed"
import Record from "../Record.json"
export default function Unsheduled_Removals(){
    console.log(Record.unscheduled_Removals)
    let val=Record.unscheduled_Removals
    console.log(val)
    const unsheduled_removals_chart={
        title:"Unscheduled Removals",
        width:"200",
        height:"200",
        data:{
        values:Record.unscheduled_Removals
        // values:[
        //     {"months":"202204", "periods":"19"},
        //     {"months":"202205","periods":"5"},
        //     {"months":"202206","periods":"6"}
        // ],
        },
        params:[{
            name:"color_Unscheduled_Removals", value:"#5b9bd5"
        }],
        "config": {
            "view": {
               "stroke": "transparent"
            }
          },
        encoding:{
            x:{field:"months",title:"Periods",axis:{labelAngle:"0","axisColor": null,  "ticks": false,grid:false,domainColor:false}},
            y:{field:"periods",type:"quantitative",title:"No.Of Removals",axis:{labelAngle:"0","axisColor": null,  "ticks": false,domainColor:false}}
        },
        mark:{
            type:"bar",
            color:{expr:"color_Unscheduled_Removals"},
            tooltip:true
        }
    }
    vegaEmbed("#unsheduled_removals_chart", unsheduled_removals_chart, { mode: "Vega-lite", actions: false })
    return(
        <>
        <div id="unsheduled_removals_chart">

        </div>
        </>
    )
}