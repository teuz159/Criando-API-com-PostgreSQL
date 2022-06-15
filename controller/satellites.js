const Satellite = require("../models/satellite");
const Planet = require("../models/Planet");

module.exports = {
    async create(req, res) {
        const {planetId} = req.params;
        const {name, serial_number} = req.body;
        try {

            const planet = await Planet.findByPk(planetId);

            if(!planet){
                res.send("Esse planeta não existe")
            }

            const satellite = await Satellite.create({name, serial_number, planetId})
            res.json(satellite).status(200);

        } catch (error) {
            res.json(error).status(400)
        }
    },
    async get(req, res) {
        try {
            const planetId = req.params.planetId
            if(!planetId){
                res.send("Esse planeta não existe")
            }
            const planet = await Planet.findByPk(planetId, {
                include: Satellite,
            });
            if(!planet){
                res.send("Esse planeta não existe")
            }
            res.json(planet)
        } catch (error) {
            console.log(error)
        }
    }
}