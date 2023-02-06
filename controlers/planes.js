const Plane = require('../models/plane')

const getPlanes = async (req, res) => {
    try {
        const planes = await Plane.find();

        res.status(200).json(planes);
    } catch(err) {
        res.status(500).json({message: "Failed getting planes list, try again"})
    }
}

const getOnePlane = async (req, res) => {
    try {
        const plane = await Plane.find({_id: req.params.id});

        res.status(200).json(plane);
    } catch(err) {
        res.status(500).json({message: "Failed getting one plane, try again"})
    }
}
const createPlane = async (req, res) => {
    const errors = {};
    if(!req.body.name) {
        errors.name = {message: "Please, type name"}
    }
    if(!req.body.price) {
        errors.name = {message: "Please, type price"}
    }
    if(!req.body.description) {
        errors.name = {message: "Please, type description"}
    }
    if(!req.body.capacity) {
        errors.name = {message: "Please, type capacity"}
    }
    if(!req.file) {
        errors.name = {message: "Please, choose plane image"}
    }

    if(Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }
    try {
        const {name, price, description, capacity} = req.body;

        const plane = await Plane.create({
            name, price, description, capacity, 
            planeImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`
        })

        res.status(201).json(plane);
    } catch(err) {
        res.status(500).json({message: "Failed creatting plane, try again"})
    }
}

module.exports = {
    getPlanes, 
    createPlane, 
    getOnePlane
}