const Planet = require("../models/Planet")

module.exports = {
    async create(req, res) {
        const {name,  position} = req.body
        
        try {
            const planet = await Planet.create({name, position});
            res.json(planet).status(200);
        } catch (error) {
            res.json(error).status(400);
        }
        
    },
    async get(req, res) {
        try {
            const planet = await Planet.findAll()
            res.json(planet).status(200)
        } catch (error) {
            res.json(error).status(400)
        }
    },
    async put(req, res){
        const {name, position} = req.body
        try {
            await Planet.update({
                name, position
            }, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send("Planeta atualizado com sucesso")
        } catch (error) {
           res.json(error).status(400)
        }
    },
    async delete (req, res) {
        try {
            await Planet.destroy(
                {
                    where: {
                        id: req.params.id,
                    }
                }
            )
            res.status(200).send("Deletado com sucesso")
        } catch (error) {
            
        }
    }
}