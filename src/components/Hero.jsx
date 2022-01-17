import React from 'react';
import styled from 'styled-components';
import homeImage from '../assets/hero.png';

export default function Hero() {
  return (
    <Section id='hero'>
      <div className='background'>
        <img src={homeImage} alt='' />
      </div>
      <div className='content'>
        <div className='title'>
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            animi ex voluptatibus consequatur atque! Debitis et quas sed amet
            rerum, asperiores quidem minima atque repudiandae quos, delectus
            eaque porro cum.
          </p>
        </div>
        <div className='search'>
          <div className='container'>
            <label htmlFor=''>Where do you want to go</label>
            <input type='text' placeholder='Search your location' />
          </div>
          <div className='container'>
            <label htmlFor=''>Check-in</label>
            <input type='date' />
          </div>
          <div className='container'>
            <label htmlFor=''>Check-out</label>
            <input type='date' />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 5;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: #fff;
      h1 {
        font-size: 3rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
      }
      p {
        padding: 0 30vw;
        text-align: center;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
      }
      label {
        font-size: 1.1rem;
        color: #03045e;
      }
      input {
        background: transparent;
        text-align: center;
        border: none;
        color: black;
        &[type='date'] {
          padding-left: 3rem;
        }
        &::placeholder {
          color: black;
        }
        &:focus {
          outline: none;
        }
      }
    }
    button {
      padding: 1rem;
      cursor: pointer;
      background: #4361ee;
      color: #fff;
      border: none;
      border-radius: 0.3rem;
      font-size: 1.1rem;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      &:hover {
        background: #023e8a;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px){
    height: 25rem;
    .background {
        img{
            height: 100%;
        }
    }
    .content {
        .title{
            h1{
                font-size: 1rem;
            }
            p{
                font-size: 0.8rem;
                padding: 1vw;
            }
        }
        .search{
            flex-direction: column;
            padding: 0.8rem;
            gap: 0.8rem;
            .container{
                padding: 0 0.8rem;
                input[type='date']{
                    padding-left: 1rem;
                }
            }
            button{
                padding: 1rem;
                font-size: 1rem;
            }
        }
    }
  }
`;
