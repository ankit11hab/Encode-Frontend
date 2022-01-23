import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';   
import { Link } from 'react-router-dom';
const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 350, mr: 30 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Number of seats available: 34
        </Typography>
        <br />
        <Typography variant='h5' component='div'>
          Number of seats selected: 1
        </Typography>
        <br />
        <Typography variant='h5' component='div'>
          Price: 10
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/purchase'>
          <button
            style={{ borderRadius: '5px', padding: '10px' }}
            size='small'
          >
            Proceed to Pay
          </button>
        </Link>
      </CardActions>
    </Card>
  );
}


