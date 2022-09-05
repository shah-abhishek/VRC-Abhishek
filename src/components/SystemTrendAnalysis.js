import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './SystemTrendAnalysis.css'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Unsheduled_Removals from "./SystemTrendAnalysis/Unsheduled_Removals";
import Marep from "./SystemTrendAnalysis/Marep";
import Delay from "./SystemTrendAnalysis/Delay";
import Pirep from "./SystemTrendAnalysis/Pirep";
import Cancellation from "./SystemTrendAnalysis/Cancellation";
import URR_Rate from "./SystemTrendAnalysis/URR_Rate";
export default function SystemTrendAnalysis() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <>
        <div className="STA">
            <div className="STA_heading">28-FUEL</div>
        {/* <div className="STA_main"> */}
            <Grid container className="STA_row">
                <Grid item className="STA_col " xs={6} md={6} >
                    <Item className="STA_item"><Unsheduled_Removals/></Item>
                </Grid>
                <Grid item className="STA_col " xs={6} md={6}>
                    <Item className="STA_item"><Marep/></Item>
                </Grid>
                <Grid item className="STA_col " xs={6} md={6}>
                    <Item className="STA_item"><Pirep/></Item>
                </Grid>
                <Grid item className="STA_col " xs={6} md={6}>
                    <Item className="STA_item"><Delay/></Item>
                </Grid>
                <Grid item className="STA_col " xs={6} md={6}>
                    <Item className="STA_item"><Cancellation/></Item>
                </Grid>
                <Grid item className="STA_col " xs={6} md={6}>
                    <Item className="STA_item"><URR_Rate/></Item>
                </Grid>
            </Grid>
            {/* </div> */}
            </div>
        </>
    )
}