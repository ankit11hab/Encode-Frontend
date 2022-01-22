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
import '../css/dashboard.css';
const Dashboard = (props) => {
    const [notes,setNotes] = useState([])
    const [loc,setLoc]=useState({})
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
        navigator.geolocation.getCurrentPosition(async function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const location={'lat':lat,'lng':lng}
            console.log(location);
            const place= await axios.post(
                'http://localhost:8000/geo/decode_latlang/',
                location
            )
            console.log(place);
            setLoc(place.data)
          });
    }, [])
    {/*get the current loclinear-gradient(to right, #001896, #060049)ation of the userfrom navigator and store it in a object*/}
    
    return (
        <div>
        <div container style={{minHeight:"370px",background:"linear-gradient(to right, #00147B, #050041)"}}>
            <div item style={{textAlign:"center", color:"white",fontSize:"50px",fontFamily:"Dongle",paddingTop:"20px"}}>
                {props.user.first_name} {props.user.last_name}
            </div>
            <div item style={{textAlign:"center", color:"#E2E2E2",fontSize:"35px",fontFamily:"Dongle",paddingTop:"20px",transform:"translate(0,-45px)"}}>
                {loc.plus_code.compound_code}
            </div>
            <div item style={{textAlign:"center", color:"rgb(199, 199, 199)",fontSize:"27px",fontFamily:"Dongle",paddingTop:"20px",transform:"translate(0,0px)"}}>
                Search for your destination point!
            </div>
            <div style={{textAlign:"center",paddingTop:"10px"}}>
                <input type = "text" style={{textAlign:"center",background:"transparent",border:"1px solid #00D1FF", width:"550px",height:"45px",borderRadius:"22px",color:"white",outline:"1px solid #00D1FF"}} placeholder='Where do you want to go today?' />
            </div>
            
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
