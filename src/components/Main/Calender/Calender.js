// Though the name of this component is calender (because designer wrote this in Figma), but here we manipulates events.
import React, { useState } from "react";
import "./Calender.css";

const Calender = ( props ) => {
    const { showFunctionality, setShowFunctionality } = props;
  return (
    <div className='events'>
      <h4>Contract Builder</h4>
      <div className={`d-flex ${showFunctionality === 'createNewEvent' ? "active" : ""}`}  onClick={()=>setShowFunctionality('createNewEvent')}>
        <div className="plus">+</div>
        <p>Create New event</p>
      </div>
      <div className={`d-flex ${showFunctionality === 'activeEvents' ? "active" : ""}`}  onClick={()=>setShowFunctionality('activeEvents')}>
        <div className="circle" style={{ backgroundColor: "#D78F24" }}></div>
        <p>Active events</p>
      </div>
      <div className={`d-flex ${showFunctionality === 'oldEvents' ? "active" : ""}`}  onClick={()=>setShowFunctionality('oldEvents')}>
        <div className="circle" style={{ backgroundColor: "#AE3F9B" }}></div>
        <p>Old events</p>
      </div>
      <div className={`d-flex ${showFunctionality === 'draftEvents' ? "active" : ""}`} onClick={()=>setShowFunctionality('draftEvents')}>
        <div className="circle" style={{ backgroundColor: "#51B64F" }}></div>
        <p>Draft events</p>
      </div>
    </div>
  );
};

export default Calender;
