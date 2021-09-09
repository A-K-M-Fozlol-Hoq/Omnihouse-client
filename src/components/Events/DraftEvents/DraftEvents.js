import React, { useEffect, useState } from "react";
import searchIcon from "../../../images/searchIcon.PNG";
import './DraftEvents.css';
import publicEvent from '../../../images/public.PNG';
import sportsEvent from '../../../images/sports.PNG';
import fairsEvent from '../../../images/fairs.PNG';
import CreateEvent from "../CreateEvent/CreateEvent";

const DraftEvents = ( props ) => {
    const [ draftEvents, setDraftEvents ]=useState([])
    const [ showDrafts, setShowDrafts ]= useState(true);
    const [ editEvent , setEditEvent ] = useState({})
    const handleClick =(eventHaveToEdit)=>{
        console.log('handleClick')
        setShowDrafts(false);
        setEditEvent(eventHaveToEdit);
    }
    const handleDelete =(singleEvent)=>{
        fetch("https://safe-stream-72585.herokuapp.com/deleteDraftByID", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
            id: singleEvent._id,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        if (data.deletedCount === 1) {
            alert("Event draft deleted successfully!");
        }
        else{
            alert('Failed to delete event draft!');
        }
        })
        .catch((error) => {
        console.error(error);
        alert('Failed to delete event draft!');
        });
    }

    useEffect(()=>{
        fetch('https://safe-stream-72585.herokuapp.com/getDrafts', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => {
              setDraftEvents(data)
            })
            .catch(error => {
                console.error(error)
            })
      },[])
    console.log(draftEvents,'draftEvents')

    const { setShowFunctionality } = props;
    return (
         <div className="draft-events">
                {
                    showDrafts?
                    <div className="drafts">
                    <div className="back-or-search">
                        <div>
                            <p onClick={() => setShowFunctionality("createNewEvent")}
                                style={{ width: "80px", cursor: "pointer" }}>
                                <b style={{ fontSize: "20px" }}>&larr;</b> BACK
                            </p>
                        </div>
                        <img src={searchIcon} alt="search" />
                    </div>
                    
                    <div className="content">
                            {
                                draftEvents.map((singleEvent, index)=>
                                <div key={index} className='single-event'>
                                <div className='side-color' style={{backgroundColor:`${singleEvent.color}`}}></div>
                                    <div className="event">
                                    {
                                        singleEvent.type === 'Sporting events'?
                                        <img src={sportsEvent} alt="" />
                                        :
                                        singleEvent.type === 'Public events'?
                                        <img src={publicEvent} alt="" />
                                        :
                                        <img src={fairsEvent} alt="" />
                                    }
                                        
                                        <div className="description">
                                        <div className="title">
                                                    <p style={{ marginTop:'0px'}}>{singleEvent.type}</p>
                                                    <div className="edit" style={{color:'green',  marginTop:'-8px', cursor: 'pointer'}}
                                                    onClick={()=>{handleClick(singleEvent)}}>
                                                        <p>Edit</p>
                                                    </div>
                                                    <div className="delete" style={{color:'red',  marginTop:'-8px', cursor: 'pointer'}}
                                                    onClick={()=>{handleDelete(singleEvent)}}>
                                                        <p>Delete</p>
                                                    </div>
                                                </div>
                                            <div className="info" style={{ marginTop:'-25px'}}>
                                                <i>{singleEvent.location.slice(0,10)}:{' '} 
                                                {(new Date(singleEvent.startTime)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} - 
                                                {(new Date(singleEvent.endTime)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} 
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                    </div>
                </div>
                :
                <div className="edit-draft">
                    <CreateEvent type={editEvent.type} title={editEvent.title} location={editEvent.location}
                     people={editEvent.people}  startTime={editEvent.startTime} end={editEvent.end} 
                     description={editEvent.description}  setShowFunctionality={setShowFunctionality}></CreateEvent>
                </div>
                }
        </div>
    );
};

export default DraftEvents;