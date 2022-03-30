# Kintsugi

Kintsugi is an app that aims to promote accessibility to mental healthcare for immigrants by connecting them to providers of their cultural/linguistic background. Built in ***React*** + ***Express***, it allows users to look up mental healthcare workers based on their language and location, and connect with them by booking appointments, sending transcribed voice messages, and video chatting. 

Named after the Japanese art of mending broken pottery with gold/silver lacquer, Kintsugi was built with the intention of helping to destigmatize mental illness in vulnerable communities, and reframing the act of getting help in a more open, compassionate light. 

This project was developed by [Aya Okizaki](), [Lindsay Tannahill](), and [myself]() as our final project at the Lighthouse Labs Web Development Bootcamp. 


## Features

Users can search by language or location, or receive help from an automated chatbot. 
![Homepage](https://github.com/heyjiani/project-kintsugi/blob/develop/react-front-end/docs/screenshots/homepage_interactive.gif?raw=true)

Users can sort professionals available to them by location, issues, and type of profession.
![screenshot3](https://github.com/heyjiani/project-kintsugi/blob/develop/react-front-end/docs/screenshots/prof_page.gif?raw=true)

Users can book appointments, and use a voice transcriber if a keyboard in their language is not available to them.
![Booking Page](https://github.com/heyjiani/project-kintsugi/blob/develop/react-front-end/docs/screenshots/booking_page.gif?raw=true)

Users can view a list of their appointments and have live meetings via video.
![Appointment Page](https://github.com/heyjiani/project-kintsugi/blob/develop/react-front-end/docs/screenshots/appt_page_screenshot.png?raw=true)
![Video page](https://github.com/heyjiani/project-kintsugi/blob/develop/react-front-end/docs/screenshots/live_appt_page.png?raw=true)

## Running the projects

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.

## Dependencies
*  axios: _0.18.1_
*  react: _17.0.2_
*  react-dom: _17.0.2_
*  react-hook-speech-to-text: _0.8.0_
*  react-icons: _4.3.1_
*  react-modern-calendar-datepicker: _3.1.6_
*  react-router-dom: _6.2.2_
*  react-scripts: _2.1.8_
*  simple-peer: _9.11.1_
*  socket.io-client: _4.4.1_

## React + Express No-Fluff Boilerplate

This project was built with @NimaBoscarino's [React Rails Boilerplate](https://github.com/NimaBoscarino/react-rails-boilerplate). 

