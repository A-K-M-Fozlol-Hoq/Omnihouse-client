import React from 'react';
import location from '../../../images/location.PNG';
import dateTime from '../../../images/dateTime.PNG';
import people from '../../../images/people2.png';
import chat from '../../../images/chat.PNG';
import alarm from '../../../images/alarm.PNG';
import './EventDetails.css';
import search from '../../../images/search.PNG';
import message from '../../../images/message.PNG';
import circle from '../../../images/circle2.PNG';
import date from '../../../images/date.PNG';
import plus from '../../../images/plus.PNG';

const EventDetails = ( props ) => {
    const { viewEvent } = props;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const today = new Date();
    let isOldEvent = false;
    const eventDate = new Date(viewEvent[0].startTime);
    let daysDiff = parseInt((eventDate - today) / (1000 * 60 * 60 * 24));
    let hoursDiff = parseInt(Math.abs(eventDate - today) / (1000 * 60 * 60) % 24);
    let minutesDiff = parseInt(Math.abs(eventDate.getTime() - today.getTime()) / (1000 * 60) % 60);
    if( daysDiff <0 || minutesDiff<0 || hoursDiff<0){
        isOldEvent=true;
        if(daysDiff <0 ){
            daysDiff = daysDiff*(-1);
        }
        if(hoursDiff <0 ){
            hoursDiff = hoursDiff*(-1);
        }
        if(minutesDiff <0 ){
            minutesDiff = minutesDiff*(-1);
        }
    }

    const deleteEvent=()=>{
        fetch("https://safe-stream-72585.herokuapp.com/deleteEventByID", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
            id: viewEvent[0]._id,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
        if (data.deletedCount === 1) {
            alert("Event deleted successfully!");
        }
        else{
            alert('Failed to delete event!');
        }
        })
        .catch((error) => {
        console.error(error);
        });
    }

    return (
        <div className="event-details">
            <h2 className='event-heading'>{viewEvent[0].title}</h2>
            <h5 className='event-title'>{viewEvent[0].type}</h5>
            <div className="info">
                <div className="address">
                    <img src={location} alt="" />
                    <p>{viewEvent[0].location}</p>
                </div>
                <div className="date-time">
                    <img src={dateTime} alt="" />
                    <div>
                    <p>
                    {(new Date(viewEvent[0].startTime)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} - 
                    {(new Date(viewEvent[0].endTime)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} 
                    </p>
                    <p>{days[(new Date(viewEvent[0].startTime)).getDay()]}, {(new Date(viewEvent[0].startTime)).getDate()} 
                    {' '}{months[(new Date(viewEvent[0].startTime)).getMonth()]} {viewEvent[0].startTime. slice(0, 4)}</p>
                    </div>
                </div>
                <div className="description">
                    <p>{viewEvent[0].description}</p>
                </div>
            </div>
            <h2>Attendees</h2>
            <div className="attendees">
            <div className="attendee">
                    <img className="profile" src={people} alt="" />
                    <div className="name">{viewEvent[0].people}</div>
                    <div className="chat-icon">
                        <img src={chat} alt="" />
                    </div>
                </div>
                <div className="attendee">
                    <img className="profile" src={people} alt="" />
                    <div className="name">{viewEvent[0].people}</div>
                    <div className="chat-icon">
                        <img src={chat} alt="" />
                    </div>
                </div>
                <div className="reminder">
                    <img src={alarm} alt="" />
                    <p>{minutesDiff} MINUTES, {hoursDiff} HOURS, {daysDiff} DAYS {(isOldEvent) && 'AGO'}</p>
                </div> 
            </div>
            <div onClick = {deleteEvent} className="cancel"><p>CANCEL EVENT</p></div>
            <div className="footer-section">
                <img src={search} alt="search" />
                <img src={message} alt="message" />
                <img src={circle} alt="circle" />
                <img src={date} alt="date" />
                <img src={plus} alt="plus" />
            </div>
        </div>
    );
};

export default EventDetails;