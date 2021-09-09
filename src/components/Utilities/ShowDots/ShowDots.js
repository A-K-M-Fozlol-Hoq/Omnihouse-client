import React, { useState } from 'react';

const ShowDots = ( props ) => {
    const { events, year, month, d} = props;
    const [ showEvent, setshowEvent ] = useState([]);
    const [ haveToReturn , sethaveToReturn ] = useState(false);
    for (let i = 0; i < events.length; i++) {
        const thisEvent = events[i];
        const eventDateTime = thisEvent.startTime;
        const eventDateTimeToParse =new Date(eventDateTime); 
        const eventDate = eventDateTimeToParse.getDate();		// Day		[dd]	(1 - 31)
        const eventMonth = eventDateTimeToParse.getMonth() +1 ;	// Month	[mm]	(1 - 12)
        const eventYear = eventDateTimeToParse.getFullYear();	// Year		[yyyy]
        // console.log(eventDate === d && eventMonth === (month) && eventYear===year, showEvent)
        if((eventDate === d && eventMonth === (month) && eventYear===year)){
            const newShowEvent = [...showEvent, thisEvent];
            setshowEvent(newShowEvent)
            console.log(showEvent)
            sethaveToReturn(true)
        }
    }
    return (
        <div>
            {/* {console.log( events, year, month, d,'--')} */}
            {/* const eventDateTime = thisEvent.startTime;
                      const eventDateTimeToParse =new Date(eventDateTime); 
                      const eventDate = eventDateTimeToParse.getDate();		// Day		[dd]	(1 - 31)
                      const eventMonth = eventDateTimeToParse.getMonth() +1 ;	// Month	[mm]	(1 - 12)
                      const eventYear = eventDateTimeToParse.getFullYear();	// Year		[yyyy]
                      // console.log(eventDate, eventMonth, eventYear);
                      // console.log(year, month, d);
                      {
                        {console.log(eventDate === d, eventMonth === month+1 , eventYear  ===year)}
                        (eventDate === d && eventMonth === (month) && eventYear===year) ? 
                        <p>p</p>
                        :
                        <p>o</p>
                      } */}
            {/* {
                showEvent?.map((eventToShowDot, index) => <p key={index}>p</p>)
            } */}
            {
                haveToReturn && 
                <div className="c">
                    p
                </div>
            }
            
        </div>
    );
};

export default ShowDots;