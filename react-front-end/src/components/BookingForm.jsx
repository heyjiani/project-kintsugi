import React from "react";
import {useState} from "react";
import Calendar, { CenturyView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookingForm() {
  const [date, setDate] = useState(new Date());
  return (
    <div
        className="form_container">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3062/3062992.png"
            style={{ width: 100}}
            alt=""
          ></img>
        </div>
        <div>
          Yumi Tanaka
          <br />
          <table>
            <tr>image
            <td>therapist
            </td>
            </tr>
            <tr>image
            <td>ADHD, Depression
            </td>
            </tr>
            <tr>image
            <td>Squamish, BC
            </td>
            </tr>
          </table>
        </div>
        <div>
        <form class="center" action="/" method="POST" id="submitRequest">
          Select appointment date: <Calendar onChange={setDate} value={date} />
          Select appointment time: 
          <ul>
          <li>9:00am</li>
          <li>10:00am</li>
          <li>01:00pm</li>
          <li>02:00pm</li>
          <li>04:00pm</li>
          </ul>
          <textarea style={{width: 600, height: 400}} name="text" id="appointment_request" class="request" type="text" placeholder="Please provide the mental health worker with some additional details about your appointment request. If you’d prefer, select the microphone to record your message. It will translate your request from your primary language to English. "></textarea>
            <br />
        <button>Submit</button>
        </form>
        </div>
      </div>
  );
}
