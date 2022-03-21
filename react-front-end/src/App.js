/* eslint-disable no-undef */
import React from "react";
// import axios from "axios";
import "./css/App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfessionalsPage from "./pages/ProfessionalsPage";
import AppointmentPage from "./pages/AppointmentPage";
import BookingPage from "./pages/BookingPage";
import "./scss/main.scss";

// fetchData = () => {
//   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
//   .then((response) => {
//     // handle success
//     console.log(response.data) // The entire response from the Rails API

//     console.log(response.data.message) // Just the message
//     this.setState({
//       message: response.data.message
//     });
//   })
// }

function App() {
  return (
    // <body>
    //   {/* nav bar below  */}

    //   {/* the components will populate in the "components_container" div below */}

    //   <main>
    //     <div className="components_container">
    //       the componnents will go here
    //     </div>
    //   </main>

    //   {/* footer below  */}

    <BrowserRouter>
      <nav class="navigation">
        <div class="logo">
          <h1>Kintsugi</h1>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
          exact
        />
        <Route
          path="/professionals"
          element={<ProfessionalsPage />}
          exact
        />
        <Route
          path="/myappointments"
          element={<AppointmentPage />}
          exact
        />
        <Route
          path="/booking"
          element={<BookingPage />}
          exact
        />
        {/* <Route element={<Error />} /> */}
      </Routes>
      <footer>
        <div>
          <h4>Kintsugi</h4>
        </div>
        <div>About the makers.</div>
        <div>© Kintsugi 2022</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
