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
            Kintsugi is an app built to help connect you with the mental health care that you need.{' '}
            <p />
            Our interface is designed to help you find a professional in your area that can speak
            your language and understand your cultural background. <p />
            <strong> Get started by selecting a language and location in the search above. </strong>
          </p>
        </div>
        {/* <div className="placeholder">
        <h1>Our Story</h1>
        <p>Kintsugi is the Japanese practice of repairing broken objects with gold. It is
          the practice of taking something broken and making it beautiful - flaws and all.<p />
          Kintsugi aims to bring help to those who feel broken and need a little lustre in their life.
          We hope that by connecting you with the right kind of mental health professional, you're
          able to shine a little brighter. <p>
            
            Click the chat icon on the bottom right if you need additional help.</p>

        </p>
      
            </div> */}
        <div></div>
      </div>
      <p className="chat">
        <Chat />
      </p>
      <p />
    </>
  );
}
