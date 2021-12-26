import axios from "axios";
import jwt_decode from 'jwt-decode'

export const getMembers = async (dispatch) => {
    let data;
    await axios.get(
        'http://localhost:8000/api/member-list/'
    )
    .then((response)=>{
        dispatch({
            type:'GET_MEMBERS',
            members:response.data
        });
        data = response.data
    })
    .catch((err)=>{
        console.log(err);
    })
    return data;
}

export const addMember = async (newMember,dispatch) => {
    try {
        dispatch({
            type:'ADD_MEMBER',
            member:newMember
        });
        await axios.post(
            'http://localhost:8000/api/member-create/',
            newMember
        )
        return {status:true};
    }
    catch(error) {
        return {status:false};
    }
}

export const loginUser = async (loginData,dispatch) => {
    try {
        const data = await axios.post(
            'http://localhost:8000/auth/token/',
            loginData
        )
        if(data.status===200)
        {
            dispatch({
                type:'LOGIN_USER',
                user: jwt_decode(data.data.access)
            })
            localStorage.setItem('authTokens',JSON.stringify(data.data))
        }
        return data;
    }
    catch(error) {
        return {status:false};
    }
}