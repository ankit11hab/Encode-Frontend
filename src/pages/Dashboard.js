import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import {Card,Box,Typography,CardContent,CardMedia,CardActions,Button} from '@mui/material';
import house from '../assets/home.jpg'
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
    }, [])
    return (
        <div >
            <Card sx={{ display: 'flex',justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Welcome {props.user.first_name} {props.user.last_name} <br />
                        Where would you like to go today?
                    </Typography>
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
            <p>Welcome { props.user.username }!</p>
            <h4>Role: {props.user.isDriver?'Driver':'Passenger'}</h4>
            {notes.map((note)=>{
                console.log(note)
                return(
                    <div key = {note.id}>{note.body}</div>
                )
            })}
             {/*Search bar*/}
             <div className="search-bar">
                <div className="search-icon">
                    <i className="fas fa-search"></i>
                </div>
                <input type="text" placeholder="Search" />
            </div>
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
