import axios from "axios";

export const getMembers = async (dispatch) => {
    let data;
    await axios.get(
        'http://localhost:8000/member-list/'
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
    dispatch({
        type:'ADD_MEMBER',
        member:newMember
    });
    await axios.post(
        'http://localhost:8000/member-create/',
        newMember
    )
    .then((response)=>{
        console.log(response.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}