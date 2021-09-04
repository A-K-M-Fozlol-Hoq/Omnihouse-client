import React, { useState } from "react";
import CreateEvent from "../Events/CreateEvent/CreateEvent";
import ActiveEvents from "../Events/ActiveEvents/ActiveEvents";
import Header from "../Header/Header";
import Calender from "../Main/Calender/Calender";
import ContrachBuilder from "../Main/ContrachBuilder/ContrachBuilder";
import OmniCheck from "../Main/OmniCheck/OmniCheck";
import OmniNews from "../Main/OmniNews/OmniNews";
import OmniScan from "../Main/OmniScan/OmniScan";
import Menu from "../Menu/Menu";
import "./Home.css";
import OldEvents from "../Events/OldEvents/OldEvents";
import DraftEvents from "../Events/DraftEvents/DraftEvents";

const Home = () => {
  // to show sidebar
  const [showComponent, setShowComponent] = useState("omniCheck");
  
  // to show main functionality
  const [ showFunctionality, setShowFunctionality ] = useState('createNewEvent');
  
  return (
    <div>
      <div className="grid-container">
        <div className="menu">
          <Menu showComponent={showComponent} setShowComponent={setShowComponent} setShowFunctionality={setShowFunctionality} ></Menu>
        </div>
        <div className="subMenu">
          {/* It shows sidebar */}
          {showComponent === "omniCheck" ? (
            <OmniCheck></OmniCheck>
          ) : showComponent === "contrachBuilder" ? (
            <ContrachBuilder></ContrachBuilder>
          ) : showComponent === "omniNews" ? (
            <OmniNews></OmniNews>
          ) : showComponent === "omniScan" ? (
            <OmniScan></OmniScan>
          ) : showComponent === "calender" ? (
            <Calender setShowFunctionality={setShowFunctionality}></Calender>
          ) : (
            <></>
          )}
        </div>
        <div className="header">
          <Header></Header>
        </div>
        {/* It shows main functionality */}
        <div className="main">
          {/* It shows sidebar */}
          {showFunctionality === "createNewEvent" ? (
            <CreateEvent setShowFunctionality={setShowFunctionality}></CreateEvent>
          ) : showFunctionality === "activeEvents" ? (
            <ActiveEvents setShowFunctionality={setShowFunctionality}></ActiveEvents>
          ) : showFunctionality === "oldEvents" ? (
            <OldEvents setShowFunctionality={setShowFunctionality}></OldEvents>
          ) : showFunctionality === "draftEvents" ? (
            <DraftEvents setShowFunctionality={setShowFunctionality}></DraftEvents>
          ) :  (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
