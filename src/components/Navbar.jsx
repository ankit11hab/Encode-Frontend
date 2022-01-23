import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import logo from '../assets/logo.png';
import Modal from "react-responsive-modal";
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { Button, Modals } from 'react-bootstrap';

const Navbar = (props) => {
  const [navbarState, setNavbarState] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch({type:'LOGOUT_USER'});
    }
  return (
    <>
      <Nav>
        <div className='brand'>
          <div className='toggle'>
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>
        <div>
        {props.isAuthenticated?<button style={{margin:'10px',borderRadius:'5px',width:'100px',height:'40px'}} onClick={handleLogout}>Logout</button>:<><Link to = '/login' ><button style={{margin:'10px',borderRadius:'5px',width:'100px',height:'40px'}}>Login</button ></Link> | <Link to = '/register'><button style={{margin:'10px',borderRadius:'5px',width:'100px',height:'40px',padding:'2px'}}>Register</button></Link></>}
          {/* <a href='#login' style={{color:"white"}}>Login/Logout</a>
          <a href='#login' style={{color:"white"}}>Register</a> */}
        </div>
      </Nav>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.isAuthenticated,
      user: state.user
  }
}
export default connect(mapStateToProps)(Navbar)

const Nav = styled.nav`
  padding-top: 3px;
  padding-bottom: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:linear-gradient(to right, #00147B, #050041);
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
      img {
        width: 3rem;
        height: 3rem;
        margin-top: 0.3rem;
      }
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  .login {
    margin-right: 1rem;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 50;
  top: ${({ state }) => (state ? '40px' : '-400px')};
  background-color: white;
  height: 25vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;
