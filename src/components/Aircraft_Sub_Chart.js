import React from "react";
import SubSystemAnalysis from "./SubSystemAnalysis";
import SystemTrendAnalysis from "./SystemTrendAnalysis";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";

export default function Aircraft_Sub_Chart() {



  const [value, setValue] = useState("SystemTrendAnalysis");

  const handleChange = (event, newValue) => {
    // console.log(value)
    setValue(newValue);

  };
  return (
    <>
      <div className="aircraft_SubChart_Container" style={{overflow:"scroll"}}>
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} centered aria-label="lab API tabs example">
              <Tab label="System Trend Analysis" value="SystemTrendAnalysis" />
              <Tab label="Sub-system Analysis" value="SubSystemAnalysis" />
              <Tab label="Cause Analysis" value="CauseAnalysis" />
              <Tab label="Report Events" value="ReportEvent" />

            </TabList>
          </Box>
          <TabPanel className="SystemTrendAnalysis" value="SystemTrendAnalysis"><SystemTrendAnalysis /></TabPanel>
          <TabPanel value="SubSystemAnalysis" className="SubSystemAnalysis"><SubSystemAnalysis /></TabPanel>
          <TabPanel value="CauseAnalysis" className="CauseAnalysis">Cause Analysis</TabPanel>
          <TabPanel value="ReportEvent" className="ReportEvent">Report Event</TabPanel>
        </TabContext>

      </div>
    </>
  )
}