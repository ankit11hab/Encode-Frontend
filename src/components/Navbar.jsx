import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <>
      <Nav>
        <div className='brand'>
          <div className='container'>
            <img src={logo} alt='' />
            BusEncode
          </div>
          <div className='toggle'></div>
        </div>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#recommend'>Places</a>
          </li>
          <li>
            <a href='#testimonials'>Testimonials</a>
          </li>
        </ul>
        <button>Connect</button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
.brand{
    .container{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    .toggle{
        display: none;
    }
}
ul{
    display: flex;
    gap: 1rem;
    list-style: none;
    li{
        a{
            text-decoration: none;
            color: #fff;
            font-size: 1.2rem;
            font-weight: bold;
            
`;
