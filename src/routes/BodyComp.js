import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BodyCompCRUD from "../components/BodyCompCRUD";
//import Deficit from '../components/Deficit'
import Background from '../components/Background';

const BodyComp = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <BodyCompCRUD />
      <Footer />
    </div>
  );
};

export default BodyComp;
