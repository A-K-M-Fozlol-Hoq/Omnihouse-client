import React from 'react';
import './Tabs.css';

const Tabs = () => {
    return (
        <div className='tabs'>
            <div className="all">
                All
            </div>
            <div className="vendors">
                Vendors
            </div>
            <div className="viewing">
                Viewing
            </div>
            <div className="warning">
                Warning
            </div>
        </div>
    );
};

export default Tabs;