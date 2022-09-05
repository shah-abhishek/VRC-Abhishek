import React from "react"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TDR from "../components/TDR";
import  "./Main.css"
export default function Main() {
    const [value, setValue] = React.useState('TDR/TDIR');

  const handleChange = (e,newValue) => {
    console.log(value)
    setValue(newValue);

  };

    
    return (
        <div className="index_Main_Container">
        <TabContext value={value} >
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="TDR/TDIR" value="TDR/TDIR" />
      <Tab label="AIRCRAFT" value="AIRCRAFT" />
      <Tab label="STATION" value="STATION" />
      <Tab label="PART" value="PART" />
      <Tab label="ATA" value="ATA" />
    </TabList>
  </Box>
  <TabPanel className="index_Main_Tab" value="TDR/TDIR"><TDR/></TabPanel>
  <TabPanel value="AIRCRAFT" className="index_Main_Tab">Item Two</TabPanel>
  <TabPanel value="STATION" className="index_Main_Tab">Item Three</TabPanel>
  <TabPanel value="PART" className="index_Main_Tab">PART</TabPanel>
  <TabPanel value="ATA" className="index_Main_Tab"></TabPanel>
</TabContext>
    
      </div>
    )
}