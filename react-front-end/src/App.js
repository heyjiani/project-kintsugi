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


  {/* nav bar below  */}

    <nav>

      <div className='logo'>
      <h1>Kintsugi</h1>
      </div>

      <div className='navigation_links'>
        <div>About</div><div>Get</div><div>View Appointments</div>
      </div>

    </nav> 


{/* the components will populate in the "components_container" div below */}

  <main>
      <div className="components_container">
        the componnents will go here 
      </div>
  </main>

{/* footer below  */}

<footer>
  <div>
<h4>Kintsugi</h4>
</div>
<div>
About the makers. 
</div>
<div>
© Kintsugi 2022
</div>
</footer>

      </body>
    );
  }
}

export default App;
