import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Selection from "./Selection";
import { provinceData, languageData } from "../../searchData";
import { DataContext } from "../../providers/DataProvider";

export default function HomeHeading() {
  const navigate = useNavigate();
  const { searchItem } = useContext(DataContext);
  const { Province, Language } = searchItem;
  const handleClick = () => {

    navigate(`/professionals/search/${Province}/${Language}`)
  }
  return (
    <div>
      <div className="heading">
        <h2>
          Find a mental health professional that
          meets your needs.
        </h2>
        <p>
          Start by selecting a language and a
          location.
        </p>
      </div>
      <Selection
        genre="Language"
        data={languageData}
      />
      <Selection
        genre="Province"
        data={provinceData}
      />
      <div onClick={handleClick} className="btn">Search</div>
    </div>
  );
}
