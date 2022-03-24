/* eslint-disable no-undef */
import React from "react";
// import axios from "axios";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/Homepage";
import ProfessionalsPage from "./pages/ProfessionalsPage";
import AppointmentPage from "./pages/AppointmentPage";
import BookingPage from "./pages/BookingPage";
import Footer from "./pages/Footer";
import "./scss/main.scss";
import NavBar from "./pages/NavBar";

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
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
            exact
          />
          <Route
            path="/professionals/search/:prov/:lang"
            element={<ProfessionalsPage />}
            exact
          />
          <Route
            path="/myappointments"
            element={<AppointmentPage />}
            exact
          />
          <Route
            path="/booking/:id"
            element={<BookingPage />}
            exact
          />

          {/* <Route element={<Error />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
