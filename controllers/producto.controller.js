const status = require('http-status');
const config = require('../_config');
const http = require('http');

let _producto;

const createProducto = (req, res) => {
    const prod = req.body;

    _producto.create(prod)
        .then(
            (data) => {
                res.status(200);
                res.json({ msg: "Producto Creado", data: data });
            }
        )
        .catch(
            (err) => {
                res.status(400);
                res.json({ msg: "Error", data: err });
            }
        )
};

const getAll = (req, res) => {
    _producto.find({})
        .sort({})
        .exec((error, doc) => {
            if (error) {
                res.status(status.BAD_REQUEST);
                res.json({ err: "Error" });
            }
            else {
                res.status(200);
                res.json({ doc });
            }
        });
};


const getById = (req, res) => {
    const id = req.params.id;

    _producto.find({ _id: id })
        .sort({})
        .exec((error, doc) => {
            if (error) {
                res.status(status.BAD_REQUEST);
                res.json({ err: "Identificaor Invalido" });
            }
            else {
                res.status(200);
                res.json({ doc });
            }
        });
};

const updateById = (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    const query = { _id: id };

    _producto.findOneAndUpdate(query, newData, (err, data) => {
        if (err) {
            res.status(400);
            res.json({ msg: "Error, intente nuevamente" });
        } else {
            res.status(200);
            res.json({ msg: "Actualizacion exitosa" });
        }
    });
};

const deleteById = (req, res) => {
    const id = req.params.id;

    _producto.remove({ _id: id }, (err, data) => {
        if (err) {
            res.status(400);
            res.json({ msg: "Error, intente nuevamente" });
        } else {
            res.status(200);
            res.json({ msg: "Registro Eliminado" });
        }
    });
};

module.exports = (Producto) => {
    _producto = Producto;
    return ({
        getAll,
        createProducto,
        getById,
        updateById,
        deleteById
    });
}
