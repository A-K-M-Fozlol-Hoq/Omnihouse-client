import React from 'react';
import './ShowEvents.css';

import publicEvent from '../../../images/public.PNG';
import sportsEvent from '../../../images/sports.PNG';
import fairsEvent from '../../../images/fairs.PNG';
import peopleOne from '../../../images/people1.png';
import peopleTwo from '../../../images/people2.png';
import peopleThree from '../../../images/people3.png';


const ShowEvents = ({events, setViewEvent, setShowContent}) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    // const d = new Date(sortedEvents[0]?.startTime);
    // const dayName = days[d.getDay()];
    // const monthName = months[d.getMonth()];
    // const date = new Date();
    // const day = date. getMonth() + 1; // Month [mm] (1 - 12)
    // const month = date. getDate(); // Day [dd] (1 - 31)
    // const year = date. getFullYear(); // Year [yyyy]
    // const startHour = date.getHours(); // Year [yyyy]
    // const startMinute = date.getMinutes(); // Year [yyyy]
    // console.log(dayName,'dayName',monthName, 'monthName', sortedEvents[0]?.startTime)
    // console. log(sortedEvents[0]?.startTime. slice(0, 10), day, month, year,startMinute, startHour);
    // console.log(
    //     date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    //   );  
    // console.log(sortedEvents)
    const handleClick =(viewEvent)=>{
        setShowContent(false)
        setViewEvent(viewEvent)
    }

    return (
        <div className="show-events">
            {
                events.map((eventsOnTHisDay, index)=>
                <div key={index}>
                    {
                        eventsOnTHisDay.map((singleEvent, index)=>
                        <div key ={index}>
                            {
                                index ===0?
                                <div>
                                    <p>{days[(new Date(singleEvent[0])).getDay()]}, {(new Date(singleEvent[0])).getDate()} 
                                    {' '}{months[(new Date(singleEvent[0])).getMonth()]} {singleEvent[0]. slice(0, 4)}</p>
                                </div>
                                :
                                <div className='single-event' onClick={()=>{handleClick(singleEvent)}}>
                                    <div className='side-color' style={{backgroundColor:`${singleEvent[0].color}`}}></div>
                                    <div className="event">
                                    {
                                        singleEvent[0].type === 'Sporting events'?
                                        <img src={sportsEvent} alt="" />
                                        :
                                        singleEvent[0].type === 'Public events'?
                                        <img src={publicEvent} alt="" />
                                        :
                                        <img src={fairsEvent} alt="" />
                                    }
                                        
                                        <div className="description">
                                            <div className="title">
                                                <p style={{marginBottom:'5px', marginTop:'0px'}}>{singleEvent[0].title.slice(0,10)}
                                                 {singleEvent[0].title.length > 10 && <p>...</p>}</p>
                                                <div className="img">
                                                    <img src={peopleOne} alt="" />
                                                    <img src={peopleTwo} alt="" />
                                                    <img src={peopleThree} alt="" />
                                                </div>
                                            </div>
                                            <div className="info">
                                                <i>{singleEvent[0].location.slice(0,10)}:{' '} 
                                                {(new Date(singleEvent[0]?.startTime)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} - 
                                                {(new Date(singleEvent[0]?.endTime)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} 
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>)
                    }
                </div>)
            }
        </div>
    );
};

export default ShowEvents;