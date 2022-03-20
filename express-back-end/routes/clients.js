const router = require("express").Router();

const {
  getClients,
  getSingleClient,
} = require("../db/helper/client-queries.js");

//all the clients routes come  here//
//api/clients
const clientRoutes = () => {
  // get the all clients
  router.get("/", (req, res) => {
    getClients()
      .then((clients) => {
        res.json(clients);
      })
      .catch((err) => {
        console.log({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    getSingleClient(req.params.id)
      .then((clients) => {
        res.json(clients);
      })
      .catch((err) => {
        console.log({ error: err.message });
      });
  });

  return router;
};

module.exports = clientRoutes;
