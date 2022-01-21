import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';   

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
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Number of seats available: 10
        </Typography>
        <br />
        <Typography variant='h5' component='div'>
          Number of seats selected: 3
        </Typography>
        <br />
        <Typography variant='h5' component='div'>
          Price: 150
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Proceed to Pay</Button>
      </CardActions>
    </Card>
  );
}


