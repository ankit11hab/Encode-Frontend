import React from 'react';
import Buses from '../components/Buses';
import Footer from '../components/Footer';

import { useParams } from "react-router-dom";

const SearchBus = () => {
  const id = useParams();
  console.log("Here",id)
  return (
    <>
      <Buses place_id={id.place_id} />
      <Footer />
    </>
  );
};

export default SearchBus;
