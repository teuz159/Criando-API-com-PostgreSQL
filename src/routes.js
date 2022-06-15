const express = require('express')
const routes = express.Router();

const PlanetController = require('../controller/planet');
const SatelliteController = require('../controller/satellites')
const CapController = require('../controller/cap')
const SpaceshipController = require('../controller/spaceship')

//rotas planetas
routes.post("/planets", PlanetController.create);
routes.get("/planets", PlanetController.get);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

//rotas satelites
routes.post("/planet/:planetId/satellites", SatelliteController.create);
routes.get("/planet/:planetId/satellites", SatelliteController.get);

//rotas caps
routes.post("/cap", CapController.create);
routes.get("/cap", CapController.get);

//rotas Spaceship
routes.post("/caps/:capId/spaceships", SpaceshipController.create);
routes.get("/caps/:capId/spaceships", SpaceshipController.get);

module.exports = routes;