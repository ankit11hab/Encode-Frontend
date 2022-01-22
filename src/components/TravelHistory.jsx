import React from 'react';
import styled from 'styled-components';
import busImage from '../assets/bus.png';

export default function TravelHistory() {
  return (
    <Section id='testimonials'>
      <div className='title'>
        <h2 style={{fontFamily:"Dongle", fontSize:"50px"}}>Travel History</h2>
      </div>
      <div className='testimonials'>
        <div className='testimonial'>
          <div className='info'>
            <img src={busImage} alt='' />
            <div className='details'>
              <h4>Guwahati</h4>
              <span>AS 781049</span>
            </div>
          </div>
        </div>
        <div className='testimonial'>
          <div className='info'>
            <img src={busImage} alt='' />
            <div className='details'>
              <h4>Lucknow</h4>
              <span>UP 226021</span>
            </div>
          </div>
        </div>
        <div className='testimonial'>
          <div className='info'>
            <img src={busImage} alt='' />
            <div className='details'>
              <h4>Ghaziabad</h4>
              <span>UP 201011</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 112, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transform: translateX(0.4rem) translateY(-1rem);
      }
      .info {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        img {
          height: 3rem;
          border-radius: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;

