import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import {Card,Box,Typography,CardContent,CardMedia,CardActions,Button,TextField, Switch,Grid} from '@mui/material';
import house from '../assets/home.jpg'
import { getPlace } from '../actions/action';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';  
import TravelHistory from '../components/TravelHistory';
import Footer from '../components/Footer';
const Dashboard = (props) => {
    const [notes,setNotes] = useState([])
    useEffect(async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authTokens')).access}`
            }
        }
        const data = await axios.get(
            'http://localhost:8000/api/notes/',
            config
        )
        console.log(data);
        setNotes(data.data)
        const location=navigator.geolocation.getCurrentPosition()
        const place = await axios.post(
            'http://127.0.0.1:8000/geo/decode_latlang/',
            {'lat':location.latitude,'lng':location.longitude},{headers: {"Content-Type": "application/json"}}
        )
        console.log(place);
    }, [])
    {/*get the current location of the userfrom navigator and store it in a object*/}
    
    
    return (
        <div>
        <div style={{display: 'flex', alignItem: 'center',width:'100%'}} >
            <Card sx={{ width: '70%',display:'block'}} style={{background: 'linear-gradient(to right, #001896, #060049)'}}>
                <CardContent sx={{ flex: '1 0 auto' }} >
                    <Typography component="div" variant="h5" style={{color:'white', marginBottom: '20px'}}>
                        Welcome {props.user.first_name} {props.user.last_name}
                    </Typography>
                    <div style={{color:'white'}}>
                        Right Now I am travelling as: <br />
                        Passenger
                        <Switch defaultChecked />
                        Driver
                    </div>
                    <TextField fullWidth label="fullWidth" id="fullWidth" sx={{bgcolor:'white'}} /> <br />
                </CardContent>
                <CardActions>
                
                </CardActions>
            </Card>
            <Card sx={{ display: 'flex',justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h6" component="div">
                        Set your precise location
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Update your location and get the bus service at your convinience
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large">Learn More</Button>
                </CardActions>
                    
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 300 }}
                    image= {house}
                    alt="house"
                />
            </Card>
            {/* <p>Welcome { props.user.username }!</p>
            <h4>Role: {props.user.isDriver?'Driver':'Passenger'}</h4>*/}
            {notes.map((note)=>{ 
                console.log(note)
                return(
                    <div key = {note.id}>{note.body}</div>
                )
            })}
        </div>
        <div style={{marginTop:'30px', marginLeft:'20px'}}>
            
            <TravelHistory/>
        </div>
            <Footer/>
    </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)
