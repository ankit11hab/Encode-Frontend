import React from 'react';
import { updateProfile } from '../../actions/action';
import { connect } from 'react-redux';

const Profile = (props) => {
    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        const first_name = e.target.first_name.value
        const last_name = e.target.last_name.value
        const phone = e.target.phone.value
        const is_driver = e.target.is_driver.checked
        const res = await props.updateProfile({'first_name':first_name,'last_name':last_name,'phone':phone,'is_driver':is_driver});
        console.log(res);
    }
    return (
        <div>
            <h3>Profile:</h3>
            <form onSubmit={handleProfileUpdate}>
               <input type = "text" placeholder="Enter first name" name="first_name"></input>
               <input type = "text" placeholder="Enter last name" name="last_name"></input>
               <input type = "text" placeholder="Enter phone nunmber" name="phone"></input>
               <input type = "checkbox" name="is_driver"></input>
               <label>I am a driver</label>
               <button type="submit">Submit</button>
           </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (profileData) => updateProfile(profileData, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
