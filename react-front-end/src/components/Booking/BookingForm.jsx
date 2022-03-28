import React from "react";
import "react-calendar/dist/Calendar.css";
import InputForm from "./InputForm";
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdWorkOutline, MdLanguage } from 'react-icons/md'
import { IconContext } from "react-icons";
import { AiOutlineTag } from 'react-icons/ai'

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
              <MdWorkOutline />
                <td>{professional.profession}</td>
              </tr>
              <tr>
              <AiOutlineTag />
                <td>{specialtiesListItem}</td>
              </tr>
              <tr>
              <HiOutlineLocationMarker />
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
