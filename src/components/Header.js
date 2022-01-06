import React from 'react'
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';

const Header = (props) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({type:'LOGOUT_USER'});
    }
    return (
        <div>
            <Link to = '/dashboard'>Dashboard</Link> | <Link to = '/purchase'>Purchase</Link> | <Link to = '/purchase/history'>Purchase History</Link> | {props.isAuthenticated?<span onClick={handleLogout}>Logout</span>:<><Link to = '/login'>Login</Link> | <Link to = '/register'>Register</Link></>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user
    }
}

/* const mapDispatchToProps = (dispatch) => {
    return {
        addMember: (newMember) => addMember(newMember, dispatch),
        getMembers: () => getMembers(dispatch)
    }
} */

export default connect(mapStateToProps)(Header)
