import React from 'react';

import Chat from './Chat';

export default function Placeholder() {
  return (
    <>
      <div className="center">
        <div></div>
        <div className="placeholder">
          <h1>Kintsugi</h1>

          <p>
            Kintsugi is an app built to help connect you with the mental health care that you need.
          </p>
          <p>
            Our interface is designed to help you find a professional in your area that can speak
            your language and understand your cultural background.
          </p>
          <strong> Get started by selecting a language and location in the search above. </strong>
        </div>
        <div></div>
      </div>

      <div className="chat">
        <Chat />
      </div>
    </>
  );
}
