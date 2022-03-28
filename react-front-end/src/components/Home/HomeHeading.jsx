import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdWorkOutline, MdLanguage } from 'react-icons/md';
import { IconContext } from 'react-icons';

import Selection from './Selection';
import { provinceData, languageData } from '../../searchData';
import { DataContext } from '../../providers/DataProvider';

export default function HomeHeading() {
  const navigate = useNavigate();
  const { searchItem } = useContext(DataContext);
  const { Province, Language } = searchItem;

  const handleClick = () => {
    navigate(`/professionals/search/${Province}/${Language}`);
  };

  return (
    <div>
      <div className="heading">
        <br />
        <h2>Find a mental health professional that meets your needs.</h2>
        <IconContext.Provider value={{ className: 'global-class-name' }}>
          <MdLanguage />
          <HiOutlineLocationMarker />
          <MdWorkOutline />
        </IconContext.Provider>

        <p>
          Start by selecting a <span>language</span> and a<span> location.</span>
        </p>
      </div>
      <p />
      <div className="selection__container">
        <Selection genre="Language" data={languageData} />
        <Selection genre="Province" data={provinceData} />
        <div onClick={handleClick} className="searchbtn">
          Search
        </div>
      </div>
    </div>
  );
}
