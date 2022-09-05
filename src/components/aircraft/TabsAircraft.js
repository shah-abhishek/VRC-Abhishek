import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CauseAnalysis from "../cause_analysis/CauseAnalysis";
import RepeatAnalysis from '../cause_analysis/RepeatAnalysis';



function TabsAircraft() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    <div className='tabchart__container'>
       <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="SYSTEM TREND ANALYSIS" value="1"/>
            <Tab label="SUB-SYSTEM PERFOMANCE" value="2" />
            <Tab label="CAUSE ANALYSIS" value="3" />
            <Tab label="REPEAT EVENTS" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"><CauseAnalysis/></TabPanel>
        <TabPanel value="2"><RepeatAnalysis/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value='4'>Item four</TabPanel>
      </TabContext>
    </Box>
    </div>
    </>
  )
}

export default TabsAircraft;
