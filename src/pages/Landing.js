import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Services from '../components/Services';
import Recommend from '../components/Recommend';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;
