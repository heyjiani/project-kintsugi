import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function BookingForm(props) {
  const { professional, specialties } = props;
  const [date, setDate] = useState(new Date());

  const specialtiesListItem =
    //get the name value //
    specialties &&
    specialties
      .map((item) => {
        console.log(item.name);
        return item.name;
      })
      .join();

  console.log(specialtiesListItem);
  return (
    <div className="form_container">
      <div>
        <img
          src={professional.icon_url}
          style={{ width: 100 }}
          alt=""
        ></img>
      </div>
      <div>
        {professional.first_name}{" "}
        {professional.last_name}
        <br />
        <table>
          <tr>
            image
            <td>{professional.profession}</td>
          </tr>
          <tr>
            image
            <td>{specialtiesListItem}</td>
          </tr>
          <tr>
            image
            <td>
              {" "}
              {professional.city},{" "}
              {professional.province}{" "}
            </td>
          </tr>
        </table>
      </div>
      <div>
        <form
          class="center"
          action="/"
          method="POST"
          id="submitRequest"
        >
          Select appointment date:{" "}
          <Calendar
            onChange={setDate}
            value={date}
          />
          Select appointment time:
          <ul>
            <li>9:00am</li>
            <li>10:00am</li>
            <li>01:00pm</li>
            <li>02:00pm</li>
            <li>04:00pm</li>
          </ul>
          <textarea
            style={{ width: 600, height: 400 }}
            name="text"
            id="appointment_request"
            class="request"
            type="text"
            placeholder="Please provide the mental health worker with some additional details about your appointment request. If you’d prefer, select the microphone to record your message. It will translate your request from your primary language to English. "
          ></textarea>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
