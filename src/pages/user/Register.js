import React from 'react'
import { registerUser } from '../../actions/action';
import { connect } from 'react-redux';
import  { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const navigate = useNavigate();

    const handleRegistration = async (e) =>{
        e.preventDefault();
        const username = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        const password2 = e.target.password2.value
        const res = await props.registerUser({'username':username,'email':email,'password':password,'password2':password2});
        console.log("res: ",res);
        if(res.status===200)
            navigate('/login');
        
    }
    if(props.isAuthenticated) return <Navigate to = '/dashboard' /> 
    return  (
        <div>
           <h3>Register</h3> 
           <form onSubmit={handleRegistration}>
               <input type = "text" placeholder="Enter username" name="username"></input>
               <input type = "email" placeholder="Enter Email" name="email"></input>
               <input type = "password" placeholder="Enter Password" name="password"></input>
               <input type = "password" placeholder="Confirm Password" name="password2"></input>
               <button type="submit">Submit</button>
           </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (registrationData) => registerUser(registrationData, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)
