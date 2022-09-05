import data from '../../json-data/fuel28.json'
import React from 'react';
import vegaEmbed from "vega-embed";



function Marep() {
    const merepData = data.mareprateData;

    var spec = {
        config: {
            legend: {
                symbolType: "circle",
                orient: "top",
                layout: { top: { anchor: "middle"}},
                title: null
            },
            view: {
                stroke: "transparent"
            }
        },
        height: 400,
        width: 400,
        mark:{
            type:"line",
            point:{
                display:true,
                shape:'triangle-up',
                size:120
            }
        },
        // mark: {
        //     type: "line",
        //     point: { 
        //         display: true
        //     }
        // },
        data: {values: merepData},
        encoding: {
            x: {field: "Month", title: "Period", axis: {ticks: false,  axis: {labelAngel: -30}}},
            y: {field: "MarepRate", "type": "quantitative", title: "Marep Rate", 
            axis: { 
                offset: 5,
                ticks: false,
                axisColor: null, 
                domainColor: false
            },
        },
            // color: {field: "Month"},
        }
               
    }

    vegaEmbed("#mrp", spec, { mode: "vega-lite", actions: false}).then(
        (result) => {
            result.view.addEventListener("click", function(event, item){
                var clickData = item.datum;
            });
        });
  return (
   <>
    <div id='mrp'>

    </div>
   </>
  )
}

export default Marep;
