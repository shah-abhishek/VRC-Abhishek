import React from "react";
import vegaEmbed from "vega-embed";
import data from '../components/TDR.json'

export default function TDR() {
    const TDR_Chart = {
        // "width": "container",
        width:1350,
        // "height": 250,
        data: {
            // values:[
            //     {label:"01-Jan-21-31-Jan-21",data:""},
            //     {label:"11-Jan-21-01-Feb-21",data:"14"},
            //     {label:"18-Jan-21-20-Feb-21",data:"14"},
            //     {label:"02-Feb-21-01-Mar-21",data:"14"},
            //     {label:"11-Feb-21-19-Mar-21",data:"14"},
            //     {label:"28-Feb-21-30-Mar-21",data:"14"},
            //     {label:"01-Mar-21-01-Apr-21",data:"14"},
            //     {label:"10-Mar-21-08-Apr-21",data:"14"},
            //     {label:"28-Mar-21-28-Apr-21",data:"14"},
            //     {label:"01-Apr-21-31-Apr-21",data:"14"},
            //     {label:"05-Apr-21-01-May-21",data:"14"},
            //     {label:"15-Apr-21-10-May-21",data:"14"},
            //     {label:"25-Apr-21-26-May-21",data:"14"},
            //     {label:"30-Apr-21-31-May-21",data:"14"},
            //     {label:"01-May-21-01-Jun-21",data:"14"},
            //     {label:"10-Jun-21-19-Jan-21",data:"14"},
            //     {label:"20-Jun-21-01-Jul-21",data:"14"},
            //     {label:"30-Jun-21-10-Jul-21",data:"14"},
            //     {label:"10-Jul-21-30-Jul-21",data:"14"},
            //     {label:"21-Jul-21-10-Aug-21",data:"14"},
            //     {label:"30-Jul-21-10-Aug-21",data:"14"},
            //     {label:"31-Jul-21-20-Aug-21",data:"14"},
            //     {label:"10-Aug-21-31-Aug-21",data:"14"},
            //     {label:"20-Aug-21-01-Sept-21",data:"14"},
            //     {label:"01-Sept-21-10-Sept-21",data:"14"},
            //     {label:"10-Sept-21-20-Sept-21",data:"14"},
            //     {label:"30-Sept-21-01-Oct-21",data:"14"},
            //     {label:"01-Oct-21-20-Oct-21",data:"14"},
            //     {label:"10-Oct-21-30-Oct-21",data:"14"},
            //     {label:"30-Oct-21-10-Nov-21",data:"14"},
            //     {label:"01-Nov-21-20-Nov-21",data:"14"},
            //     {label:"10-Nov-21-31-Nov-21",data:"14"},
            //     {label:"20-Nov-21-01-Dec-21",data:"14"},
            //     {label:"30-Nov-21-20-Dec-21",data:"14"},



            // ],
            "values": data.TDR
        },

        // config: {
        //     legend: {
        //         symbolType: "triangle-up",
        //         orient: "top",
        //         layout: { top: { anchor: "middle" } }
        //     }
        // },
        params: [{
            name: "TDR_line", value: "#537dab"
        },
        { name: "TDR_point", value: "steelblue" }
        ],
        layer: [{
            mark: {
                type: "line", point: {
                    display: true,
                    shape: "triangle",
                    size: "100"

                },
                color: { expr: "TDR_line" },
                tooltip: true
            },
            encoding: {
                x: {
                    field: "4 week",
                    // type:"nominal"
                    title: "Periods(4 Week)"
                },
                "y": {
                    "field": "TTDDIIRR",
                    "type": "quantitative",
                    "title": "TDIR",
                    "scale": { "domain": [94, 100] },
                    axis: { format: ".2f", labelExpr: "datum.value+'%'" }
                },
               
            }
        },
        {
            "mark": {
                "type": "rule",
                "strokeDash": [3.4],
                "shape": "line",
                "size": 1,
                color: { expr: "TDR_point" },
                tooltip: true

            },
            encoding: {
                "y": { "field": "Target", "type": "quantitative" },
                // "text": {
                //     "datum": "Target",
                //     // scale:{range:["#537dab"]}


                // }
              
                //     "color": {
                //         datum: "Target",

                //         "legend": {
                //             "orient": "top",
                //             "title": null,
                //             layout: { top: { anchor: "middle" } },
                //             "symbolType": "stroke",
                //             "symbolFillColor": "blue",
                //             fontSize: "25"
                //         }

                //     }
            }
        }]

    }
    vegaEmbed("#vis", TDR_Chart, { mode: "Vega-lite", actions: false })

    return (
        <div>
            <div id="vis">

            </div>
        </div>
    )
}
