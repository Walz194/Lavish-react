import React from "react";
import HeroSection from "../HeroSection";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <React.Fragment>
      <HeroSection {...homeObjOne} />
    </React.Fragment>
  );
}

export default Home;
