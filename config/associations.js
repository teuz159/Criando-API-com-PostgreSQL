const Planet = require("../models/Planet");
const Satelite = require("../models/satellite")

//Associação Has One or One to One

/*
Planet.hasOne(Satelite, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Satelite.belongsTo(Planet, {
    foreingKey: "planetId", 
    as: "planet"
});
*/

//Associação Has Many or One to Many

Planet.hasMany(Satelite, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Satelite.belongsTo(Planet, {
    foreingKey: "planetId", 
    as: "planet"
});

module.exports = {Planet, Satelite};