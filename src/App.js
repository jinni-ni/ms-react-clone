import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ChooseYourMs from "./components/ChooseYourMs";
import Section2 from "./components/Section2";
import GmaePass from "./components/GamePass";
import Section3 from "./components/Section3";
import MSResponse from "./components/MSResponse";
import ThisHoliday from "./components/ThisHoliday";
import Social from "./components/Social";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <ChooseYourMs />
      <Section2 />
      <GmaePass />
      <Section3 />
      <MSResponse />
      <ThisHoliday />
      <Social />
      <Footer />
    </Router>
  );
};

export default App;
