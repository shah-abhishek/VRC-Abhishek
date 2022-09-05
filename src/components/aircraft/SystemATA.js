import React from 'react';
import vegaEmbed from "vega-embed";

function SystemATA() {

    const spec = {
        
    }

    /**@Author: Abhishek kumar
     * @create: 31/08/2022
     * @desc: create chart and onclick in vega bar chart
     */

    vegaEmbed("#vis", spec, {mode: "vega-lite", actions: false}).then(
        (result) => {
            result.view.addEventListener("click", function (event, item){
                var clickData = item.datum;
                console.log(clickData);
            })
        }
    )
  return (
    <div>
      
    </div>
  )
}

export default SystemATA
