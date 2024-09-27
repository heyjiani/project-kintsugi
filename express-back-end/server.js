require("dotenv").config();
const Express = require("express");
const morgan = require("morgan");
const BodyParser = require("body-parser");
const app = Express();
const PORT = process.env.PORT || 8080;
const socketServer = require('./socketServer');
const cors = require("cors");

// Routes requires
const clientRoutes = require("./routes/clients");
const professionalRoutes = require("./routes/professionals");
const appointmentRoute = require("./routes/appointments");
const specialtiesRoute = require("./routes/specialties");

// Middleware
app.use(morgan("dev"));
app.use(
  BodyParser.urlencoded({ extended: false })
);
app.use(BodyParser.json());
app.use(cors());

// Routes
app.use("/api/clients", clientRoutes());
app.use(
  "/api/professionals",
  professionalRoutes()
);
app.use("/api/appointments", appointmentRoute());
app.use("/api/specialties", specialtiesRoute());




const httpServer = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

socketServer.listen(httpServer);
