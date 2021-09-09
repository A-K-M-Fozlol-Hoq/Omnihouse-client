import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
// import ShowDots from '../ShowDots/ShowDots';

const Frame = styled.div`
  width: 350px;
  border: 1px solid #292529;
  box-shadow: 2px 2px 2px #292529;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #292529;
`;

const Button = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid #292529;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #4E444C;
      border-radius:5px;
    `}
`;

const Calendar = ( props ) => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

  return (
    <Frame>
      <Header>
        <Button style={{ fontSize:'30px'}}onClick={() => setDate(new Date(year, month - 1, day))}>&#8249;</Button>
        <div style={{ marginTop:'10px'}}>
          {MONTHS[month]} {year}
        </div>
        <Button style={{ fontSize:'30px'}}onClick={() => setDate(new Date(year, month + 1, day))}>&#8250;</Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map((d) => (
          <Day key={d}>
            <strong>{d}</strong>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            var eventsToday=[]
            if(props.sortedAllEvents){
              for (let i = 0; i < props.sortedAllEvents.length; i++) {
                const thisEvent = props.sortedAllEvents[i];
                const eventDateTime = thisEvent.startTime;
                const eventDateTimeToParse =new Date(eventDateTime); 
                const eventDate = eventDateTimeToParse.getDate();		// Day		[dd]	(1 - 31)
                const eventMonth = eventDateTimeToParse.getMonth() +1 ;	// Month	[mm]	(1 - 12)
                const eventYear = eventDateTimeToParse.getFullYear();	// Year		[yyyy]
                if((eventDate === d && eventMonth === (month+1) && eventYear===year)){
                    eventsToday.push(thisEvent);
                }
            }
            }
            return (
              <Day
                key={index}
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {
                (eventsToday.length === 0 )&& 
                <div style={{backgroundColor:''}}>{d > 0 ? d : ''}</div>
                }
                {
                (eventsToday.length > 0 )&& 
                  <div>
                    <div>{d > 0 ? d : ''}</div>
                    {
                    eventsToday.map((eventToday, index)=>
                    <div style={{width:'5px', height:'5px', borderRadius:'50%', float:'left',margin:'auto', marginLeft:'3px',
                       backgroundColor:`${eventToday.color}`}} key={index}></div>)
                  }
                  </div>
                }
              </Day>
            );
          })}
      </Body>
    </Frame>
  );
}

export default Calendar;