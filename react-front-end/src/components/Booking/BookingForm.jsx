import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import InputForm from "./InputForm";

export default function BookingForm(props) {
  const { professional, specialties } = props;
  const specialtiesListItem =
    //get the name value //
    specialties &&
    specialties
      .map((item) => {
        return item.name;
      })
      .join();

  console.log(specialtiesListItem);
  return (
    <>{professional &&
      <div className="form_container">
        <p className="go_back">
          Go back & view more professionals.
        </p>
        <p />

        <div className="profile_header">
          <div>
            <img
              src={professional.icon_url}
              style={{ width: 160 }}
              alt=""
            ></img>
          </div>

          <div className="proff_name">
            <h2>
              {professional.first_name}{" "}
              {professional.last_name}
            </h2>
            <br />
            <table>
              <tr>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7154/7154963.png"
                  alt=""
                />
                <td>{professional.profession}</td>
              </tr>
              <tr>
                <img
                  src="https://cdn-icons.flaticon.com/png/512/1620/premium/1620735.png?token=exp=1648008818~hmac=fa5d955242998cbc63a6523944fb22dc"
                  alt=""
                />
                <td>{specialtiesListItem}</td>
              </tr>
              <tr>
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838912.png?token=exp=1648008845~hmac=ed9fe90b862db5ada20c35f9e8a47bad"
                  alt=""
                />
                <td>
                  {" "}
                  {professional.city},{" "}
                  {professional.province}{" "}
                </td>
              </tr>
            </table>
          </div>

          {/* profile-header ends*/}
        </div>
        <p />
        <InputForm
          professional={professional} />

      </div>
    }
      {/* form container div below  */}

    </>
  );
}
