import React from 'react';
import { SelectPicker } from 'rsuite';
import data from './../../data';
import './Aircraft.css';

function Aircraft() {

    /**@author: Abhishek kumar
     * @creation: 31/08/2022
     * @desc: get data from data.js file and store into a variable
     */

    const aircraftData = data.aircraft;
    const aircraftSelection =  data.aircraftSelection;

    const selection= () => {
        const value = document.getElementsByClassName("selection__chart")[0];
        value.style.display === "block" ? value.style.display = "none" : value.style.display = "block"
    }

  return (
    <>
    <div className='selection__chart'>
        <div className='selection__left'>
            <SelectPicker placeholder="Aircraft" data={aircraftData} onChange={selection}/>
        </div>
        
        <div style={{display: "block"}} className='selection__chart'>
            <SelectPicker placeholder="Select options" data={aircraftSelection} style={{width: 356}}/>
        </div>
    </div>
    
    </>
  )
}

export default Aircraft;
