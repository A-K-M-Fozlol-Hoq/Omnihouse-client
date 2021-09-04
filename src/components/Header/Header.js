import React from 'react';
import questionMark from "../../images/questionMark.PNG";
import logOut from "../../images/logOut.PNG";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logout"><img src={logOut} alt="logOut" /></div>
            <div className="question"><img src={questionMark} alt="questionMark" /></div>
        </div>
    );
};

export default Header;