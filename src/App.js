import './App.css';
import {useState } from "react";
import React, { Component } from "react";
import logo from'./logo.svg';
import leftArrow from './left-arrow.svg';
import rightArrow from './right-arrow.svg';
import data from './data.json';
import {ToolTipController, Select} from 'react-tooltip-controller';

function Header(){
  return(
    <div className="Header">
      <img src={logo} alt="logo" className='logo'></img>
    </div>
  )
}

function ScheduleTitle(){
  return(
    <div>
      <div className="Schedule-Title" data-tooltip-content="Hello World">
        Schedule
      </div>
    </div>
  )
}

function ScheduleBox(){   // const scheduleData = JSON.parse('{"schedule":[{"date":"Friday, January 13, 2023","events":[{"name":"Swag Distribution Starts","time":"3:00 PM","clickable":false},{"name":"Event Begins","time":"5:00 PM","clickable":false},{"name":"Swag Distribution Ends","time":"","clickable":false},{"name":"Opening Ceremony","time":"7:00 PM","clickable":false},{"name":"Hacking Begins","time":"9:00 PM","clickable":false},{"name":"Resume/Cover Letter","time":"10:00 PM","clickable":true},{"name":"MLH Event: Bob Ross Painting","time":"","clickable":true},{"name":"Equity In Tech","time":"10:45 PM","clickable":true}]},{"date":"Saturday, January 14, 2023","events":[{"name":"Adding a Backend and Database to Your App in 3 Lines","time":"9:00 AM","clickable":false},{"name":"Intro to Algorithm / Applications","time":"10:00 AM","clickable":true},{"name":"Tech Interviews","time":"","clickable":true},{"name":"Intro to Github","time":"11:00 AM","clickable":true},{"name":"Swag Distribution Starts","time":"","clickable":false},{"name":"What Could Go Wrong","time":"","clickable":true},{"name":"Basics of HTML","time":"12:00 PM","clickable":true},{"name":"Intro to UI Design","time":"1:00 PM","clickable":true},{"name":"Android Development","time":"2:00 PM","clickable":true},{"name":"Swag Distribution Ends","time":"","clickable":false},{"name":"Intro to Python","time":"3:00 PM","clickable":true},{"name":"Intro to React","time":"4:00 PM","clickable":true},{"name":"Environmental Innovation Guided Discussion","time":"","clickable":true},{"name":"MLH Event: Security Challenge","time":"5:30 PM","clickable":true}]},{"date":"Sunday, January 15, 2023","events":[{"name":"Project Submissions","time":"10:00 AM","clickable":false},{"name":"Judging Begins","time":"11:30 AM","clickable":false},{"name":"Closing Ceremony","time":"2:00 PM","clickable":false},{"name":"End of Event","time":"4:00 PM","clickable":false}]}]}'); 
  const [currentDate, setCurrentDate] = useState(0);
  function arrowLeftClick(){
    let holder = currentDate;
    if(holder !== 0){
      setCurrentDate(holder -=1);
    }
  }

  function arrowRightClick(){
    let holder = currentDate;
    if(holder !== 2){
      setCurrentDate(holder +=1);
    }
  }

  return(
    <div className = "MainContainer">
      <ScheduleTitle />
      <div className = "Schedule-Box-Row">
        {/* left button */}
        <img src={leftArrow} alt="left arrow" className='arrows' onClick = {()=> arrowLeftClick()}></img>

        {/* schedule content */}
        <div className = "Schedule-Box">
          {/* <div className = "Schedule-Box-Border"></div> the shadow */}
          <ScheduleContents scheduleData = {data} currentDateIndex={currentDate}/>
        </div>

        {/* right button */}
        <img src={rightArrow} alt="right arrow" className='arrows' onClick = {()=> arrowRightClick()}></img>
      </div>
    </div>
  );
}

function ToolTipAdvanced({event}){
  return(
    <div class ="tooltip-main">

      <div class = "event-title">{event}</div>

      <div class = "first-name-field">
        <div className= "first-name-title">
          First Name:
        </div>
        <input type = "text" data-interactive={true} className="input"></input>
      </div>

      <div className = "last-name-field">
        <div className = "last-name-title">
          Last Name:
        </div>
        <input type = "text" data-interactive={true} className="input"></input>
      </div>

      <div className = "email-field">
        <div className = "email-title">
          Email:
        </div>
        <input type = "email" data-interactive={true} className="input"></input>
      </div>

      <div className = "reminder-field">
        <input type = "radio"></input>
        <div className = "reminder-title">Would you like an email reminder?</div>
      </div>
      <div className = "register">
        <button className = "register-button">register</button>
      </div>
    </div>
  );
}

function ScheduleContents({ currentDateIndex}){
  const listDivs = data.schedule[currentDateIndex]["events"].map((item) => {
    if((item.clickable) === true){
      return(
        <div>
          <table>
            <tr>
              <td className = "Schedule-Item-Time">{item.time}</td>
              {/* <td className = "Schedule-Item-Event" data-tooltip-id='register-event'>{item.name}</td> */}
              <ToolTipController
                detect="click"
                offsetX="centre"
                offsetY={20}
                closeOnClick={false}>
                <Select>
                  <td className = "Schedule-Item-Event" data-tooltip-id='register-event'>{item.name}</td>
                </Select>
                <ToolTipAdvanced event = {item.name}/>
            </ToolTipController>
              {/* <Tooltip id = "register-event" place = "bottom" openOnClick isOpen
                style={{
                  backgroundColor: "#17384F"
                }}>
                <div class = "tooltip-main">
                  First Name
                  <input type = "email" data-interactive={true}></input>
                  Hello World
                </div>
              </Tooltip> */}
            </tr>
          </table>
        </div>
      );
    }
    return(
      <div>
        <table>
          <tr>
            <td className = "Schedule-Item-Time">{item.time}</td>
            <td className = "Schedule-Item-Event">{item.name}</td>
          </tr>
        </table>
      </div>
    );
    
    
  })


  return (
    <div className = "Schedule-Box-Contents">
      <div className = "Schd-date">
          {data.schedule[currentDateIndex]["date"]}
      </div>
      <div className = "table-wrapper">
      {listDivs}
      </div>
    </div>
  );

}

class App extends Component{
  render(){
    return (
      <div>
        <Header />
        <ScheduleBox/>
      </div>
    );
  }
}

export default App;
