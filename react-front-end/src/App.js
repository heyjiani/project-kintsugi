import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';

class App extends Component {
 
  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
<body>
    <nav class='navigation'>
      <div class="logo">
      <h1>Kintsugi</h1>
      </div>
    </nav> 


      <div className="App">
      body
        
      </div>

      </body>
    );
  }
}

export default App;
