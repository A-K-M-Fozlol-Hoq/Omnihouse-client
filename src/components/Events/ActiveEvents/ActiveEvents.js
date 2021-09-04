import React from 'react';

const ActiveEvents = ( props ) => {
    const { setShowFunctionality } = props;
    return (
        <div>
            <p onClick={()=>setShowFunctionality('createNewEvent') } 
             style={{width:'80px', cursor: 'pointer'}}
             ><b style={{fontSize:'20px'}}>&larr;</b> BACK</p><br /><br />
            <h1>ActiveEvents</h1>
        </div>
    );
};

export default ActiveEvents;