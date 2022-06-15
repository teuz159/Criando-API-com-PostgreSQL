const Cap = require("../models/Cap");

module.exports = {
    async create (req, res) {
        try {
            const {name, registerNumber} = req.body;
            const cap = await Cap.create({name, registerNumber});
            res.json(cap); 
        } catch (error) {
            res.json(error)
        }
    },
    async get (req, res) {
        try {
            const cap = await Cap.findAll();
            res.json(cap); 
        } catch (error) {
           res.json(error) 
        }
    }
}