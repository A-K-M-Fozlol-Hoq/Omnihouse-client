import React, { useEffect, useState } from "react";
import  Calendar  from "../../Utilities/Calendar/Calendar";
import searchIcon from "../../../images/searchIcon.PNG";
import "./OldEvents.css";
import Tabs from "../../Utilities/Tabs/Tabs";
import Events from "../../Utilities/Events/Events";
import EventDetails from "../../Utilities/EventDetails/EventDetails";
import CreateEvent from "../CreateEvent/CreateEvent";

const OldEvents = (props) => {
  const { setShowFunctionality } = props;
  const [ oldEvents, setOldEvents ] =useState([])
  const [ allEvents, setAllEvents ] =useState([])
  const [ showContent, setShowContent ] = useState(true)
  const [ viewEvent, setViewEvent ] = useState([]);
  const [ showEvents, setShowEvents ]= useState(true);
  const [ eventToEdit, setEventToEdit ]= useState({});
  // var eventToEdit={}
  
  useEffect(()=>{
    fetch('https://safe-stream-72585.herokuapp.com/getOldEvents', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    })
        .then(response => response.json())
        .then(data => {
          setOldEvents(data)
        })
        .catch(error => {
            console.error(error)
        })
  },[])

  useEffect(()=>{
    fetch('https://safe-stream-72585.herokuapp.com/getAllEvents', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    })
        .then(response => response.json())
        .then(data => {
          setAllEvents(data)
        })
        .catch(error => {
            console.error(error)
        })
  },[])
  const sortedOldEvents = oldEvents.sort((event1, event2) =>new Date(event1.startTime) - new Date(event2.startTime))
  const sortedAllEvents = allEvents.sort((event1, event2) =>new Date(event2.startTime) - new Date(event1.startTime))

  return (
    <div className="old-events">
      {
        showEvents ?
        <div>
          {
            showContent?
            <div className="content">
            <div className="home">
              <div className="back-or-search">
                  <div>
                  <p onClick={() => setShowFunctionality("createNewEvent")}
                      style={{ width: "80px", cursor: "pointer" }}>
                      <b style={{ fontSize: "20px" }}>&larr;</b> BACK
                  </p>
                  </div>
                  <img src={searchIcon} alt="search" />
              </div>
              <h2>Calender</h2>
              <Tabs></Tabs>
              <Calendar sortedAllEvents={sortedAllEvents}></Calendar>
              {
                sortedOldEvents.length > 0 && (<Events setViewEvent={setViewEvent} setShowContent={setShowContent} sortedEvents={sortedOldEvents}></Events>)
              }
            </div>
          </div>
          :
          <div className="content">

            <div className="back-or-search">
              <div>
              <p onClick={() => setShowFunctionality("createNewEvent")}
                  style={{ width: "80px", cursor: "pointer" }}>
                  <b style={{ fontSize: "20px"}}>&larr;</b> BACK
              </p>
              </div>
              <div onClick={() => {setEventToEdit(viewEvent[0]);setShowEvents(false);}} className="edit"><p>edit</p></div>
              <EventDetails viewEvent={viewEvent}></EventDetails>
            </div>
          </div>
          }
        </div>
        :
        <div className="edit-draft">
          {
            eventToEdit.title &&
            <div>
              <CreateEvent type={eventToEdit.type} title={eventToEdit.title} location={eventToEdit.location}
              people={eventToEdit.people}  startTime={eventToEdit.startTime} endTime={eventToEdit.endTime} 
              description={eventToEdit.description}  setShowFunctionality={setShowFunctionality}></CreateEvent>
            </div>
            
          }
        </div>
      }
      
      
      
    </div>
  );
};

export default OldEvents;
