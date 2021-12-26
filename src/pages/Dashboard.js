import React from 'react'
import { connect } from 'react-redux';

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <h3>Welcome { props.user.username }!</h3>
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
