const initState = {
    members: [],
}

const rootReducer = (state=initState,action) => {
    console.log(action)
    if(action.type==='GET_MEMBERS') {
        const newArr = [...state.members,action.members];
        return {
            ...state,
            members: newArr
        }
    }
    if(action.type==='ADD_MEMBER') {
        const newArr = [...state.members,action.member];
        return {
            ...state,
            members: newArr
        }
    }
    return state;
}

export default rootReducer;