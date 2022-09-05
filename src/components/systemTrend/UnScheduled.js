import data from '../../json-data/fuel28.json'
import React from 'react';
import vegaEmbed from "vega-embed";



function UnScheduled() {
    const unscheduleddata = data.unscheduledData;

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
        mark: {
            type: "bar",
            width: "20"
        },
        data: {values: unscheduleddata},
        encoding: {
            x: {field: "Month", "type": "nominal", "axis": {"labelAngle": 0}, title: "Period", axis: {ticks: false, domainColor: false, axis: {labelAngel: -30}}},
            y: {field: "UnScheduled_Removals", "type": "quantitative", title: "No of Removals", 
            axis: { 
                offset: 5,
                ticks: false,
                axisColor: null, 
                domainColor: false
            },
            stroke: {
                color: "transparent"
            }
        },
            color: {field: "Month"},
        }
               
    }

    vegaEmbed("#vis", spec, { mode: "vega-lite", actions: false}).then(
        (result) => {
            result.view.addEventListener("click", function(event, item){
                var clickData = item.datum;
            });
        });
  return (
   <>
    <div id='vis'>

    </div>
   </>
  )
}

export default UnScheduled;
