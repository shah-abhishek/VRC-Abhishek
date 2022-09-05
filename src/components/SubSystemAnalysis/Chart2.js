import React from "react";
import Record from '../Record.json'
import vegaEmbed from 'vega-embed'


export default function Chart2() {
    const chart2 = {
        title: "2822-ENGINE FUEL FEED SYSTEM",
        width: "250",
        // height:"200",
        data: {
            values: Record.chart2
        },
        config: {
            legend: {
                symbolType: "triangle-up",
                orient: "top",
                titleBaseline: "middle",
                layout:{top:{anchor:"middle"}}

            },
            "view": {
                "stroke": "transparent"
             }
        },
        layer: [

            {
                mark: {
                    type: "bar",
                    width: "50",
                    // point:{
                    //     display:true,
                    //     shape:"triangle",
                    //     size:"100",
                    //     color:"#f48040"
                    // },
                    // tooltip:true,
                    color: "#b4c7e7"
                },
                encoding: {
                    x: { field: "months",axis:{labelAngle:"0","axisColor": null,  "ticks": false,grid:false,domainColor:false} },
                    y: { field: "pirep", type: "quantitative", title: "Pirep Rate Per 100 Flights Cycle", axis: { format: ".1f", position: "right" ,grid:true,"axisColor": null,  "ticks": false,domainColor:false} },
                    // color:{
                    //     feild:"interruption_rate",
                    //     // legned:{
                    //     //     // symbol
                    //     //     // labe
                    //     //     symbolType:"circle",
                    //     //     symbolSize:"50"
                    //     // }
                    // }
                    color:{datum:"Pirep"},
                    tooltip: [
                        { field: "months" ,type:"nominal"},
                        {
                            field: "pirep",type:"nominal"
                        }
                    ]
                }
            },
            // {
            //     "mark": {
            //         "type": "text",
            //         "align": "left",
            //         "baseline": "middle",
            //         //   "dx": 3
            //     },
            //     "encoding": {
            //         "text": { "field": "pirep", "type": "quantitative" }
            //     }
            // },


            {
                mark: {
                    type: "line",
                    point: {
                        display: true,
                        shape: "triangle",
                        size: "100",
                        color: "#86b4df"
                    },
                    color: "#86b4df",
                    tooltip: true
                },
                encoding: {
                    x: { field: "months", title: "Periods "  },
                    y: { field: "pirep_rate", type: "quantitative", title: "No. Of Pirep" ,axis:{"axisColor": null,  "ticks": false,domainColor:false}},
                    // color:{
                    //     feild:"interruption_rate",
                    //     legned:{
                    //         // symbol
                    //         // labe
                    //         // symbolType:"circle",
                    //         // symbolSize:"50"
                    //     }
                    // }
                    color:{datum:"Pirep Rate"},
                },


            },
            // {
            //     mark:{
            //     // type:"text",
            //     // align:"center",
            //     // baseline:"middle",
            //     },
            //     // encoding:{
            //     //     text:{field:"pirep_rate",type:"quantitative"}
            //     // }

            //   } 


        ],
        "resolve": { "scale": { "y": "independent" } }

    }
    vegaEmbed("#chart2", chart2, { mode: "Vega-lite", actions: false })
    return (
        <div id="chart2">

        </div>
    )
}