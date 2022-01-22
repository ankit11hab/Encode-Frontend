import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TravelHistory from '../components/TravelHistory';
import Footer from '../components/Footer';
import '../css/dashboard.css';
const Dashboard = () => {
  return (
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
          Settings
        </div>
        <div
          item
          style={{
            textAlign: 'center',
            color: 'rgb(199, 199, 199)',
            fontSize: '35px',
            fontFamily: 'Dongle',
            paddingTop: '20px',
            transform: 'translate(0,-45px)',
          }}
        >
          Are you a driver?
        </div>
        <div
          item
          style={{
            textAlign: 'center',
            color: '#00D1FF',
            fontSize: '27px',
            fontFamily: 'Dongle',
            paddingTop: '20px',
            transform: 'translate(0,0px)',
          }}
        >
          Your driver status has been verified!
        </div>
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          margin: '4rem 0',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            border: 'solid 1px black',
            borderRadius: '20px',
            padding: '10px 30px',
            cursor: 'pointer',
          }}
        >
          Exp Time
        </div>
        <div style={{margin: '0 15px'}}>
          <input style={{cursor:'pointer'}} type='radio' id='html' name='fav_language' value='HTML' />
        </div>
        <div
          style={{
            border: 'solid 1px black',
            borderRadius: '20px',
            padding: '10px 30px',
            cursor: 'pointer',
          }}
        >
          Location
        </div>
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
