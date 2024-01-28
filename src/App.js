// import logo from './logo.svg';
import './App.css';
import { useRef } from "react";
import moment from 'moment/moment';


function App() {
  // let dateInputRef = useRef();
  // let dateSpanRef = useRef();
  // let ageSpanRef = useRef();
  let dobInputRef = useRef();
  // let monthsInputRef = useRef();

  
  // let daysArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  // let monthsArr=["January","February","March","april","May","June","July","Agust","September","October","November","December"]
  return (
    <div className="App">
      <form>
        <div>
          {/* <lable>Batch Start Dte</lable>
          <input ref={dateInputRef} type="date"></input>
          <br>
          </br> */}
          {/* <lable>Muhurtham</lable>
          <input ref={dateInputRef} type="datetime-local"></input>*/}
        {/* </div>
        <div>
          <button type="button" onClick={() => {



            console.log(dateInputRef.current.value);
            let selectedDate = new Date(dateInputRef.current.value);

            console.log(moment(selectedDate).format('MMMM Do YYYY, h:mm:ss a'));
            console.log(moment(selectedDate).format('dddd'));
            console.log(moment(selectedDate).format("MMM Do YY"));
           
            console.log(moment(selectedDate).add(120, 'days').calendar());
            
            
            
            console.log(selectedDate.getHours());
            console.log(selectedDate.getMinutes());
            console.log(selectedDate.getSeconds());
            console.log(selectedDate.getMilliseconds());

            console.log(daysArr[selectedDate.getDay()]);
            console.log(selectedDate.getDate());
            console.log(monthsArr[selectedDate.getMonth()]);
            console.log(selectedDate.getFullYear());
            console.log(selectedDate.getTime());

            let courseDurationInMS = 120 * 24 * 60 * 60 * 1000;
            let batchStartDateInMS = selectedDate.getTime();
            let proposedEndDateInMs = batchStartDateInMS + courseDurationInMS;

            let proposedEndDate = new Date(proposedEndDateInMs);

            console.log(proposedEndDate.getHours());
            console.log(proposedEndDate.getMinutes());
            console.log(proposedEndDate.getSeconds());
            console.log(proposedEndDate.getMilliseconds());

            console.log(daysArr[proposedEndDate.getDay()]);
            proposedEndDate.setDate(25);
            proposedEndDate.setMonth(4);
            proposedEndDate.setFullYear(2024);
            proposedEndDate.setHours(10);
            console.log(proposedEndDate.getDate());
            console.log(monthsArr[proposedEndDate.getMonth()]);
            console.log(proposedEndDate.getFullYear());
            console.log(proposedEndDate.getTime());
            
          }}>calculate</button> */}

          <h1>Age calculater</h1>
          <label>Choose your date of Birth:</label>
          <input ref={dobInputRef}type="date"></input>
        </div>
        <div>
          <button type="button" onClick={() => {
            let dob = new Date(dobInputRef.current.value);
            let today = new Date();
            let ageCal = moment.duration(today - dob);
            let years = ageCal.years();
            let months = ageCal.days();
            let days = ageCal.days();
            console.log(`The age is:${years}years${months}months|${days}days`);
          }}>Calculate The Age</button>
        </div>
      </form>
    </div>
  );
}

export default App;
