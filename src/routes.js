const express = require('express')
const routes = express.Router();

const PlanetController = require('../controller/planet');
const SatelliteController = require('../controller/satellites')

//rotas planetas
routes.post("/planets", PlanetController.create);
routes.get("/planets", PlanetController.get);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

//rotas satelites
routes.post("/planet/:planetId/satellites", SatelliteController.create);
routes.get("/planet/:planetId/satellites", SatelliteController.get);

module.exports = routes;