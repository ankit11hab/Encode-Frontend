import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

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
        <div>
            <h1>Dashboard Page</h1>
            <h3>Welcome { props.user.username }!</h3>
            <h4>Role: {props.user.isDriver?'Driver':'Passenger'}</h4>
            {notes.map((note)=>{
                console.log(note)
                return(
                    <div key = {note.id}>{note.body}</div>
                )
            })}
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
