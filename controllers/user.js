const { request, response } = require("express");

const usuarioGet = (req, res = response) => {

    const { name = "No Name", age, nationality} = req.query;

    res.json({
        mgs: "get API - controlador",
        name,
        age,
        nationality
    });
}

const usuarioPost = (req, res = response) => {

    const { nombre, edad} = req.body;

    res.json({
        mgs: "post API - controlador",
        nombre,
        edad
    });
}

const usuarioPut = (req, res = response) => {
    
    const id = req.params.id;
    
    res.json({
        mgs: "put API - controlador",
        id
    });
}

const usuarioPatch = (req, res = response) => {
    res.json({
        mgs: "patch API - controlador"
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        mgs: "delete API - controlador"
    });
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}