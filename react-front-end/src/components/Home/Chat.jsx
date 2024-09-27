import React, { Component } from 'react';

export class Chat extends Component {
  componentDidMount() {
    (function (d, m) {
      const kommunicateSettings = {
        appId: process.env.REACT_APP_KOMMUNICATE_ID,
        popupWidget: true,
        automaticChatOpenOnNavigation: true
      };
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = process.env.REACT_APP_KOMMUNICATE_SRC;
      const h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  }
  render() {
    return <></>;
  }
}

export default Chat;
