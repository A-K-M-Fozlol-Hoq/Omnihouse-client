import React, { useState } from 'react';
import ShowEvents from '../ShowEvents/ShowEvents';
import './Events.css';
const Events = ( props ) => {
    const { sortedEvents, setViewEvent, setShowContent } = props;
    let partialEventsArray = ([[sortedEvents[0].startTime. slice(0, 10)]])
    let eventDate = (sortedEvents[0].startTime. slice(0, 10))
    let totalDate = 1;
    let events=[];
    if(sortedEvents.length > 0){
        for (let index = 0; index < sortedEvents.length; index++) {
            const thisEvent = sortedEvents[index];
            if(thisEvent.startTime. slice(0, 10) === eventDate){
    
                partialEventsArray.push([thisEvent]);
            }else{
                eventDate = thisEvent.startTime. slice(0, 10);
                totalDate = totalDate +1;
                
                events.push(partialEventsArray);
                partialEventsArray=[[thisEvent.startTime. slice(0, 10)]];
                partialEventsArray.push([thisEvent])
            }  
            if( (index+1) === sortedEvents.length ){
                events.push(partialEventsArray);
            }        
        }
    }
    
    return (
        <div>
            {
                totalDate === events.length &&
                <ShowEvents events={events} setViewEvent={setViewEvent} setShowContent={setShowContent}></ShowEvents>
            }
        </div>
    );
};

export default Events;