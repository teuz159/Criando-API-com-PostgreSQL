const express = require('express')
const routes = express.Router();
const PlanetController = require('../controller/planet');
const Planet = require('../models/Planet');

routes.post("/planets", PlanetController.create);
routes.get("/planets", PlanetController.get);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

module.exports = routes;