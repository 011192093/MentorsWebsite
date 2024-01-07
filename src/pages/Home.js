import React from "react";

import Prime_service from "../components/Prime-service/Prime-service";
import Advertise from "../components/Advertisement/Advertise";
import Logoslider from "../components/Logo-slider/Logo-slider";
import Videos from "../components/videos/Videos";
import Events from "../components/events/Events";


function Home() {
  return (
    <>
      
      <Advertise/>
      <Events/>
      <Videos/>
      <Prime_service/>  
      <Logoslider/>  
    
    </>
  );
}

export default Home;
