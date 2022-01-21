import React from 'react';
import OppositeContentTimeline from '../components/OppositeContentTimeline';
import BasicCard from '../components/BasicCard';
import Footer from '../components/Footer';
import styled from 'styled-components';


const SelectedBus = () => {
  return (
    <>
      <StyledSelectedBus>
        <OppositeContentTimeline />
        <BasicCard />
      </StyledSelectedBus>

      <Footer />
    </>
  );
};

export default SelectedBus;

const StyledSelectedBus = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`