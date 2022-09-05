import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import UnScheduled from './UnScheduled';
import Marep from './Marep';



function SystemTrend() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      
  return (
    <>
        <div className='systemtrend__analysis'>
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item><UnScheduled/></Item>
        </Grid>
        <Grid xs={6}>
          <Item><Marep/></Item>
        </Grid>
        <Grid xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
        </div>
    </>
  )
}

export default SystemTrend
