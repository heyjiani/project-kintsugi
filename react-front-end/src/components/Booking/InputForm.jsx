
// how to toggle?

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import useSpeechToText from 'react-hook-speech-to-text';


export default function InputForm(props) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("09:00:00");
  const [formState, setFormState] = useState(false)
  const { professional } = props;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    setFormState(values.description)
  };

  const handleTimeChange = (time) => {
    setTime(time);
    console.log(time);
  };

  const addNewAppointmentData = (event) => {
    const myData = 
    {
      professional: professional.id,
      date: date,
      time: time,
      info: formState
    }
    fetch('/api/appointments', {
         method: 'post',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(myData)
       })
       .then(response=>response.json())
       .then(body=>{
            console.log('fetch successfull')
            navigate('/thankyou')
        })
       
        .catch((error) => {
        console.error('Error posting new appointment. Error:', error);
        });

}
  // }

  

  useEffect(() => {
    if (!formState === false) addNewAppointmentData(); 
  }, [formState]);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    crossBrowser: true,
    useLegacyResults: false,
    speechRecognitionProperties: {
      lang: 'ja',
      interimResults: true
    }
  });

  if (error) return <p>Web Speech API is not available in this browser</p>;

  return (

    <div className="bottomhalf">

      <form onSubmit={handleSubmit}>
          <div className="timeslots">
            <div>
              Select appointment date:{" "}
              <Calendar
                onChange={setDate}
                value={date}
                name="date"
                type="date"
              />
            </div>

            <div>
              Select appointment time:
              <select
                name="time"
                value={time}
                type="time"
                onChange={(event) =>
                  handleTimeChange(
                    event.target.value
                  )
                }
              >
                <option id="0" value="09:00:00">09:00am</option>
                <option id="1" value="10:00:00">10:00am</option>
                <option id="2" value="11:00:00">11:00am</option>
                <option id="3" value="12:00:00">12:00pm</option>
                <option id="4" value="13:00:00">1:00pm</option>
                <option id="5" value="14:00:00">2:00pm</option>
                <option id="6" value="15:00:00">3:00pm</option>
              </select>
            </div>
          </div>

          <p />

          <div>

            <textarea
              style={{ width: 600, height: 400 }}
              name="description"
              id="appointment_request"
              class="request"
              type="text"
              placeholder="Please provide the mental health worker with some additional details about your appointment request. If you’d prefer, select the microphone to record your message. It will translate your request from your primary language to English. "
              value={interimResult}
            />
            <br />
            <button type="button" onClick={isRecording ? stopSpeechToText : startSpeechToText}>{isRecording ? '🛑' : '🎤'}</button>
            <button type="submit" >Submit</button> 
                  </div>
                  
         </form>
      </div> 
          
    )  
  };