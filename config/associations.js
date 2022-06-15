const Planet = require("../models/Planet");
const Satelite = require("../models/satellite")
const Spaceship = require("../models/spaceship")
const Cap = require("../models/Cap")

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


//Associação Many to Many - Uma associação One to Many só que dois dois lados.

Cap.belongsToMany(Spaceship, {
    foreingKey: "capId",
    through: "capSpaceship",
    as: "spaceships"
});

Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipId",
    through: "capSpaceship",
    as: "caps",
})