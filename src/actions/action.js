import axios from "axios";
import jwt_decode from 'jwt-decode'


const updateToken = async () => {
    try {
        const data = await axios.post(
            'http://localhost:8000/auth/token/refresh/',
            {'refresh':localStorage.getItem('authTokens')?JSON.parse(localStorage.getItem('authTokens')).refresh:null}
        )
        if(data.status===200)
        {
            await localStorage.removeItem('authTokens')
            localStorage.setItem('authTokens',JSON.stringify(data.data))
        }
    }
    catch(error) {
        console.log(error);
    }
}


setInterval(() => {
    if(localStorage.getItem('authTokens'))
        updateToken()
}, 240000);

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

export const registerUser = async (registrationData,dispatch) => {
    try {
        const data = await axios.post(
            'http://localhost:8000/auth/register/',
            registrationData
        )
        return data;
    }
    catch(error) {
        return {status:false};
    }
}