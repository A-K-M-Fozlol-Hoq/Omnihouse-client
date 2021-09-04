import React from "react";
import "./Menu.css";
import calender from "../../images/calender.PNG";
import contractBuilder from "../../images/contractBuilder.PNG";
import omniCheck from "../../images/omniCheck.PNG";
import omniNews from "../../images/omniNews.PNG";
import omniScan from "../../images/omniScan.PNG";
import profile from "../../images/profile.PNG";
import circle from "../../images/circle.PNG";

const Menu = ( props ) => {
  const { showComponent, setShowComponent, setShowFunctionality } = props;
  
  return (
    <div className="menu">
      <div className="profile">
        <img src={profile} alt="" />
      </div>
      <div className="icons">
        <div onClick={()=>{setShowComponent('omniCheck'); setShowFunctionality('')}}>
          <img src={omniCheck} alt="" />
          <p>Omni Check</p>
        </div>
        <div onClick={()=>{setShowComponent('contrachBuilder'); setShowFunctionality('')}}>
          <img src={contractBuilder} alt="" />
          <p>Contrach Builder</p>
        </div>
        <div onClick={()=>{setShowComponent('omniNews'); setShowFunctionality('')}}>
          <img src={omniNews} alt="" />
          <p>OmniNews</p>
        </div>
        <div onClick={()=>{setShowComponent('omniScan'); setShowFunctionality('')}}>
          <img src={omniScan} alt="" />
          <p>OmniScan</p>
        </div>
        <div onClick={()=>{setShowComponent('calender'); setShowFunctionality('')}}>
          <img src={calender} alt="" />
          <p>Calender</p>
        </div>
        <div className="circle">
          <img src={circle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
