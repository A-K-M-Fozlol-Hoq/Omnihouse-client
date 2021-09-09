import React, { useState } from 'react';
import './CreateEvent.css';
import search from '../../../images/search.PNG';
import message from '../../../images/message.PNG';
import circle from '../../../images/circle2.PNG';
import date from '../../../images/date.PNG';
import plus from '../../../images/plus.PNG';
import title from '../../../images/title.PNG';
import location from '../../../images/location.PNG';
import people from '../../../images/people.PNG';
import dateTime from '../../../images/dateTime.PNG';
import Modal from "react-modal";
import { saveEvent, saveEventDraft } from './createEventManager';

const customStyles = {
  content: {
    background: "rgba(50, 12, 43, 0.4",
    color:'#fff',
    border: "2px solid #161516",
    borderRadius: "15px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const buttonDesign = {
  background: "#93227F",
  color:'#fff',
  border: "2px solid #161516",
  cursor: "pointer",
  padding: "5px",
  margin: "5px 0",
  width: "100px",
};
Modal.setAppElement("#root");

const CreateEvent = ( props ) => {
  const [modalIsOpen, setIsOpen] = useState(false);
    const { setShowFunctionality } = props;
    const [ disableSubmit, setDisableSubmit ] = useState(false);
    const [ eventData , setEventData ]= useState({
      type: false,
      title: '',
      location: '',
      people: '',
      startTime: '',
      endTime:"",
      description: '',
    });

    

    // modal handler
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    const handleSubmit=(e) => {
      e.preventDefault();
      setDisableSubmit(true)
       // Update State if data send through props ( as we used the concept of re-use component)
        if((!eventData.type)&& (props.type) ){
          eventData.type= props.type;
        }
        if((props.title) && !(eventData.title)){
          eventData.title= props.title;
        }
        if((props.location) && !(eventData.location)){
          eventData.location= props.location;
        }
        if((props.people) && !(eventData.people)){
          eventData.people= props.people;
        }
        if((props.startTime) && !(eventData.startTime)){
          eventData.startTime= props.startTime;
        }
        console.log(props,'hi', props.endTime,(props.endTime) && !(eventData.endTime),'(props.endTime) && !(eventData.endTime)' )
        if((props.endTime) && !(eventData.endTime)){
          eventData.endTime= props.endTime;
        }
        if((props.description) && !(eventData.description)){
          eventData.description= props.description;
        }
        if((eventData.type) && eventData.title && eventData.location && eventData.people
        && eventData.startTime && eventData.endTime && eventData.description) {
          saveEvent(eventData)
        }
      else{
        saveEventDraft(eventData)
      }
    }

    // update state with every key stroke
    const handleChange=(e) => {
      if(e.target.name === 'event-type'){
        const newEventData = { ...eventData }
        newEventData.type = e.target.value ;
        setEventData(newEventData);
      }
      else if(e.target.name === 'event-title'){
        const newEventData = { ...eventData }
        newEventData.title = e.target.value ;
        setEventData(newEventData);
      }
      else if(e.target.name === 'location'){
        const newEventData = { ...eventData }
        newEventData.location = e.target.value ;
        setEventData(newEventData);
      }
      else if(e.target.name === 'people'){
        const newEventData = { ...eventData }
        newEventData.people = e.target.value ;
        setEventData(newEventData);
      }
      else if(e.target.name === 'start-date-time'){
        const newEventData = { ...eventData }
        newEventData.startTime = e.target.value ;
        setEventData(newEventData);
      }
      else if(e.target.name === 'end-date-time'){
        const newEventData = { ...eventData }
        newEventData.endTime = e.target.value ;
        setEventData(newEventData);
      }
      else if(e.target.name === 'description'){
        const newEventData = { ...eventData }
        newEventData.description = e.target.value ;
        setEventData(newEventData);
      }
    }

    return (
        <div className='create-event'>
            <div className="form-section">
              <form className="form" onSubmit={handleSubmit}>
                  <p onClick={()=>setShowFunctionality('') } 
                  style={{width:'80px', cursor: 'pointer', marginBottom:'-40px'}}
                  ><b style={{fontSize:'20px'}}>&larr;</b> BACK</p><br /><br />
                  <h2>New Event</h2>
                  <div className="event-input">
                  <select onChange={handleChange} className="event-type form-control" name="event-type" id="eventType" required
                  defaultValue={`${props.type? `${props.type}` : ""}`}>
                  <option value=''>Event type</option>
                    <option value="Sporting events">Sporting events</option>
                    <option value="Public events">Public events</option>
                    <option value="Fairs or festivals">Fairs or festivals</option>
                  </select> 
                  </div>  
                  <div className='title-input'>
                    <img src={title} alt="" />  
                    <input className="form-control" placeholder="Event title" name="event-title" type="text"
                    defaultValue={`${props.title? `${props.title}` : ""}`} onChange={handleChange} type="text"/>
                  </div>                       
                  <div className='location-input'>
                    <img src={location} alt="" />  
                    <input className="form-control" placeholder="Location" name="location" type="text"
                    defaultValue={`${props.location? `${props.location}` : ""}`} onChange={handleChange} type="text"/>
                  </div>                       
                  <div className='people-input'>
                    <img src={people} alt="" />  
                    <input className="form-control" placeholder="People" name="people" type="text" 
                    defaultValue={`${props.people? `${props.people}` : ""}`} onChange={handleChange} type="text"/>
                  </div>                       
                  <div className='date-time-input'>
                    <img src={dateTime} alt="" />  
                     <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    shouldCloseOnOverlayClick={false}
                  >
                    <p className="text-center text-white">Event Start Time </p>
                    <input className="form-control" placeholder="Time and Date" name="start-date-time" type="datetime-local"
                    defaultValue={`${props.startTime? `${props.startTime}` : ""}`} id="start-date-time" onChange={handleChange}/>
                    <p className="text-center text-white">Event End Time </p>
                    <input className="form-control" placeholder="Time and Date" name="end-date-time" type="datetime-local"
                     defaultValue={`${props.endTime? `${props.endTime}` : ""}`} id="end-date-time" onChange={handleChange}/> <br />
                    <button style={buttonDesign} onClick={closeModal}>close</button>
                  </Modal>
                     <label style={{margin:'12px 0 0 30px', fontSize:'14px', cursor: 'pointer',
                      backgroundColor:'transparent', border:'none', color:'#F9F3FA'}} onClick={openModal}
                     >Time and date</label>
                  </div>
                  <div className='description-input'>
                    <textarea id="description" name="description" placeholder="Add a description"
                    defaultValue={`${props.description? `${props.description}` : ""}`} onChange={handleChange} ></textarea>
                  </div>
                  <div className="add-event" >
                  <input className={`${disableSubmit ? "disable-submit" : ""}`} type="submit"
                  disabled={disableSubmit} value='Add Event' />
                  </div>
              </form>
            </div>
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

export default CreateEvent;