import React from "react";
import { AiOutlineTag } from 'react-icons/ai'

export default function Sidebar(props) {

  const { specialties, handleCheck, professions, cities, handleRadio } = props;

  const [showIssues, toggleShowIssues] = React.useState(false);
  const [showCities, toggleShowCities] = React.useState(false);
  const [showProfession, toggleShowProfession] = React.useState(false);

  const parsedSpecialties = specialties.map(s => {
    return (
      <div key={s.id}>
        <input type="checkbox" value={s.id} onClick={e => handleCheck(e)} />
        {s.name}
      </div>
    )
  });

  const parsedProfessions = professions.map((p, i) => {
    return (
      <div key={i}>
        <input type="radio" name="profession" value={p} onClick={e => handleRadio(e, 'profession', p)} />
        {p}
      </div>
    )
  });

  const parsedCities = cities.map((c, i) => {
    return (
      <div key={i}>
        <input type="radio" name="city" value={c} onClick={e => handleRadio(e, 'city', c)} />
        {c}
      </div>
    )
  });

  return (
    <div className="sidebar">
      <header><span>
      <AiOutlineTag /></span>{" "}
         Sort by
      </header>
      <div className="sidebar__options">

     

          <button
          onClick={() => toggleShowIssues(!showIssues)}
        >  
          {showIssues ? 'Close' : 'Issues '}
        </button>    
        {showIssues && parsedSpecialties
        }

    
        <button
          onClick={() => toggleShowCities(!showCities)}
        >  
          {showCities ? 'Close' : 'Cities'}
        </button>    
        {showCities && parsedCities
        }

      
        <button
          onClick={() => toggleShowProfession(!showProfession)}
        >  
          {showProfession ? 'Close' : 'Professions '}
        </button>    
        {showProfession && parsedProfessions
        }
      </div>
    </div>
  );
}

