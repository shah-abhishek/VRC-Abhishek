
import React from "react";
import { None } from "vega";
import vegaEmbed from 'vega-embed'

import Record from '../Record.json'
export default function Chart1() {
    const chart1 = {
        title: "2822-ENGINE FUEL FEED SYSTEM",
        width: 250,

        data: {
            values: Record.chart1
        },
        config: {
            legend: {
                symbolType: "triangle-up",
                orient: "top",
                layout:{top:{anchor:"middle"}}
            },
            "view": {
                "stroke": "transparent"
             }
        },
        
        params:[{
            name:"color_interruption_rate" 
        }],
        layer: [{
            encoding: {
                x: { field: "periods", title: "Periods (4 Weeks)" },
                y: { field: "interruption_rate", type: "quantitative", title: "Interruptaion Rate Per 1000 Scheduled Flights"},
                // color: {
                //     datum: "Interruption Rate",


                // }
                // color:{
                //     feild:"interruption_rate",
                //     legned:{
                //         // symbol
                //         // labe
                //         // symbolType:"circle",
                //         // symbolSize:"50"
                //     }
                // }
            },
            mark: {
                type: "line",
                point: {
                    display: true,
                    shape: "triangle",
                    size: "100",
                    color: "#ec5a3a"
                },
                color: "#cd3535",
                tooltip: true
            }

        }, {
            mark: {
                type: "line",
                point: {
                    display: true,
                    shape: "triangle",
                    size: "100",
                    color: "#f48040"
                },
                color: "#ee853e",

                tooltip: true
            },
            encoding: {
                x: { field: "periods",},
                y: { field: "cancellation_rate", type: "quantitative", title:null ,axis:{labelAngle:"0","axisColor": null,  "ticks": false,domainColor:false} },
                color: {
                    datum: "Cancellation Rate",

                },
                // shape:{field:"cancellation_rate"}
                // color:{
                //     feild:"interruption_rate",
                //     // legned:{
                //     //     // symbol
                //     //     // labe
                //     //     symbolType:"circle",
                //     //     symbolSize:"50"
                //     // }
                // }
            }
        }

        ]

    }
    vegaEmbed("#chart1", chart1, { mode: "Vega-lite", actions: false })
    return (
        <div id="chart1">

        </div>
    )
}