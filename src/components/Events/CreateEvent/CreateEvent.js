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
    const [ error, setError ] = useState('')
    const [ showOkButton, setShowOkButton ] = useState('')
    const updateDateTime=() => {
        console.log('date')
    }
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    const handleSubit=() => {
        
    }
    const handleChange=(e) => {
      console.log(e.target.value, e.target.name)
    }
    return (
        <div className='create-event'>
            <div className="form-section">
              <form className="form" onSubmit={handleSubit}>
                  <p onClick={()=>setShowFunctionality('') } 
                  style={{width:'80px', cursor: 'pointer', marginBottom:'-40px'}}
                  ><b style={{fontSize:'20px'}}>&larr;</b> BACK</p><br /><br />

                  <h2>New Event</h2>

                  <select onChange={handleChange} className="event-type form-control" name="eventType" id="eventType" required>
                  <option value=''>Event type</option>
                    <option value="Sporting events">Sporting events</option>
                    <option value="Public events">Public events</option>
                    <option value="Fairs or festivals">Fairs or festivals</option>
                  </select>   
                  <div className='title-input'>
                    <img src={title} alt="" />  
                    <input className="form-control" placeholder="Event title" name="event-title" type="text" onChange={handleChange} type="text"/>
                  </div>                       
                  <div className='location-input'>
                    <img src={location} alt="" />  
                    <input className="form-control" placeholder="Location" name="location" type="text" onChange={handleChange} type="text"/>
                  </div>                       
                  <div className='people-input'>
                    <img src={people} alt="" />  
                    <input className="form-control" placeholder="People" name="people" type="text" onChange={handleChange} type="text"/>
                  </div>                       
                  <div className='date-time-input'>
                    <img src={dateTime} alt="" />  
                    {/* <input className="form-control" placeholder="Time and Date" name="date-time" type="datetime-local"
                     value="1980-08-26" id="date-tme" onChange={handleChange}/> */}
                     <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    shouldCloseOnOverlayClick={false}
                  >
                    <p className="text-center text-white">Event Start Time </p>
                    <input className="form-control" placeholder="Time and Date" name="date-time" type="datetime-local"
                    id="date-tme" onChange={updateDateTime}/>
                    <p className="text-center text-white">Event End Time </p>
                    <input className="form-control" placeholder="Time and Date" name="date-time" type="datetime-local"
                     id="date-tme" onChange={updateDateTime}/> <br />
                    <button style={buttonDesign} onClick={closeModal}>close</button>
                  </Modal>
                     <label style={{margin:'12px 0 0 30px', fontSize:'14px', cursor: 'pointer',
                      backgroundColor:'transparent', border:'none', color:'#F9F3FA'}} onClick={openModal}
                     >Time and date</label>
                  </div>
                  <div className='description-input'>
                    <textarea id="description" name="description" placeholder="Add a description" ></textarea>
                  </div>
                  <div className="add-event">
                  <input type="submit" value="Add Event" />
                  </div>
                      



                {/* <input type="submit" className="add-event" value="Add Event" /> */}
              </form>
            </div>
            <div className="footer-section">
                <img src={search} alt="" />
                <img src={message} alt="" />
                <img src={circle} alt="" />
                <img src={date} alt="" />
                <img src={plus} alt="" />
            </div>
        </div>
    );
};

export default CreateEvent;