const Spaceship = require("../models/Spaceship");
const Cap = require("../models/Cap");

module.exports = {
  async create(req, res) {
    const { capId } = req.params;
    const { name, capacity } = req.body;

    const cap = await Cap.findByPk(capId);

    if (!cap) {
      res.send("Error, this cap does not exist!");
    }

    const [spaceships] = await Spaceship.findOrCreate({
      where: { name, capacity },
    });

    await cap.addSpaceship(spaceships);

    res.json(spaceships);
  },
  async get(req, res) {
    const { capId } = req.params;

    const cap = await Cap.findByPk(capId, {
      include: { association: "spaceships" },
    });

    res.json(cap);
  },
};