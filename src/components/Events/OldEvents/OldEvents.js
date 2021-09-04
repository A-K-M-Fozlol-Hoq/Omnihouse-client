import React from 'react';

const OldEvents = ( props ) => {
    const { setShowFunctionality } = props;
    return (
        <div>
            <p onClick={()=>setShowFunctionality('createNewEvent') } 
             style={{width:'80px', cursor: 'pointer'}}
             ><b style={{fontSize:'20px'}}>&larr;</b> BACK</p><br /><br />
            <h1>Old Events</h1>
        </div>
    );
};

export default OldEvents;