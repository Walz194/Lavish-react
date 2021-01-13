import React from "react";
import Pricing from "../../Pricing";
import HeroSection from "../HeroSection";
import { homeObjOne, homeObjFour, homeObjThree, homeObjTwo } from "./Data";

function Home() {
  return (
    <React.Fragment>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </React.Fragment>
  );
}

export default Home;
