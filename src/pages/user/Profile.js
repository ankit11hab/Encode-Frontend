import React from 'react';
import { updateProfile } from '../../actions/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';


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
        <div>
          <div
            container
            style={{
              minHeight: '250px',
              background: 'linear-gradient(to right, #00147B, #050041)',
            }}
          >
            <div
              item
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '50px',
                fontFamily: 'Dongle',
                paddingTop: '20px',
              }}
            >
              Profile
            </div>
            <div
              item
              style={{
                textAlign: 'center',
                color: '#E2E2E2',
                fontSize: '40px',
                fontFamily: 'Dongle',
                paddingTop: '30px',
                transform: 'translate(0,-45px)',
              }}
            >
              {props.user.first_name} {props.user.last_name}
            </div>
            <div
              item
              style={{
                textAlign: 'center',
                color: 'rgb(199, 199, 199)',
                fontSize: '27px',
                fontFamily: 'Dongle',
                paddingTop: '20px',
                transform: 'translate(0,0px)',
              }}
            >
              Update Profile!
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '2rem auto',
            }}
          >
            <form
              onSubmit={handleProfileUpdate}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '2rem auto',
              }}
            >
              <label htmlFor=''>First Name: </label>
              <input
                type='text'
                placeholder='Enter first name'
                name='first_name'
              ></input>
              <br />
              <label htmlFor=''>Last Name: </label>
              <input
                type='text'
                placeholder='Enter last name'
                name='last_name'
              ></input>
              <br />
              <label htmlFor=''>Phone: </label>
              <input
                type='text'
                placeholder='Enter phone nunmber'
                name='phone'
              ></input>
              <br />
              <div>
                <input
                  type='checkbox'
                  name='is_driver'
                  style={{ marginRight: '10px' }}
                ></input>
                <label>I am a driver</label>
              </div>

              <br />
              <button style={{ borderRadius: '5px' }} type='submit'>
                Submit
              </button>
            </form>
          </div>

          <Footer />
        </div>
      </div>
    );
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
