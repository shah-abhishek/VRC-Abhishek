import React from "react";
import Chart1 from "./SubSystemAnalysis/Chart1";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './SystemTrendAnalysis.css'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chart2 from "./SubSystemAnalysis/Chart2";
import Chart3 from "./SubSystemAnalysis/Chart3";
import Chart4 from "./SubSystemAnalysis/Chart4";
import "./SubSystemAnalysis.css"

export default function SubSystemAnalysis(){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return(
        <div className="SSA">
            <div className="SSA_heading">2822- ENGINE FUEL FEED SYSTEM</div>
        {/* <div className="SSA_main"> */}
            <Grid container className="SSA_row">
                <Grid item className="SSA_col " xs={6} md={6} >
                    <Item className="SSA_item"><Chart1/></Item>
                </Grid>
                <Grid item className="SSA_col " xs={6} md={6}>
                    <Item className="SSA_item"><Chart2/></Item>
                </Grid>
                <Grid item className="SSA_col " xs={6} md={6}>
                    <Item className="SSA_item"><Chart3/></Item>
                </Grid>
                <Grid item className="SSA_col " xs={6} md={6}>
                    <Item className="SSA_item"><Chart4/></Item>
                </Grid>
                {/* <Grid item className="SSA_col " xs={6} md={6}>
                    <Item className="SSA_item"><Cancellation/></Item>
                </Grid>
                <Grid item className="SSA_col " xs={6} md={6}>
                    <Item className="SSA_item"><URR_Rate/></Item>
                </Grid> */}
            </Grid>
            {/* </div> */}
            </div>
    )
}