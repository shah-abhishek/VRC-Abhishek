import React, {useState} from 'react';
import './Main.css';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Avatar from '@mui/material/Avatar';
import ArrowCircleRight from '@mui/icons-material/ArrowCircleRight';
import { SelectPicker } from 'rsuite';
import data from "./../../data";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Aircraft from './../aircraft/Aircraft';
import TabsAircraft from '../aircraft/TabsAircraft';
import SystemTrend from '../systemTrend/SystemTrend';



function Main() {

  const [value, setValue] = useState('1');

  const fleet = data.fleet;
  const fleetyear = data.fleetYear;
  const fleetmonth = data.fleetMonth;

  /**@Author: Abhishek kumar
   * @creation: 31/08/2022
   * @desc: change the display value onClick on the fleet dropdown
   */

  const mainChart = (e) => {
    const value = document.getElementsByClassName("charts__container")[0];
    value.style.display === "none" ? value.style.display = "block" : value.style.display = "none"
  }

  /**@Author: Abhishek kumar
   * @creation: 31/08/2022
   * @desc: to handle the tabs 
   */

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <div className='index__container'>
          <div className='index__left'>
            <AirplanemodeActiveIcon className='airoplane__icon'/>
            <h3>VRC</h3>
          </div>

          <div className='index__right'>
          <Avatar alt="Abhi" src="./../../assets/image.jpg" className='avatar__icon'/>
          <h3>Admin</h3>
          <ArrowCircleRight className='c-arrow__icon'/>
          </div>
        </div>

        <div className='fleet__container'>
          <div className='fleet__left'>
            <h3>Fleet </h3>
            <SelectPicker placeholder="FLEET" data={fleet} onChange={mainChart}/>
          </div>

          <div className='fleet__right'>
            <h3>Duration </h3>
            <SelectPicker placeholder="YEAR" data={fleetyear} className="fleet__year"/>
            <SelectPicker placeholder="MONTH" data={fleetmonth} className="fleet__month"/>
          </div>
        </div>

        <div className='charts__container' style={{display: "none"}}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="TDR/TDIR" value="1" />
            <Tab label="AIRCRAFT" value="2" />
            <Tab label="STATION" value="3" />
            <Tab label="PART" value="4"/>
            <Tab label="ATA" value="5"/>
          </TabList>
        </Box>
        <TabPanel value="1"><SystemTrend/></TabPanel>
        <TabPanel value="2"><Aircraft/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item four</TabPanel>
        <TabPanel value="5"><TabsAircraft/></TabPanel>
      </TabContext>
    </Box>
        </div>
    </>
  )
}

export default Main;
