const status = require('http-status');
const config = require('../_config');
const http = require('http');

let _cliente;

const createCliente = (req, res) => {
    const clie = req.body;

    _cliente.create(clie)
        .then(
            (data) => {
                res.status(200);
                res.json({ msg: "Usuario creado", data: data });
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
    _cliente.find({})
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

    _cliente.find({ _id: id })
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

    _cliente.findOneAndUpdate(query, newData, (err, data) => {
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

    _cliente.remove({ _id: id }, (err, data) => {
        if (err) {
            res.status(400);
            res.json({ msg: "Error, intente nuevamente" });
        } else {
            res.status(200);
            res.json({ msg: "Registro Eliminado" });
        }
    });
};


module.exports = (Cliente) => {
    _cliente = Cliente;
    return ({
        getAll,
        createCliente,
        getById,
        updateById,
        deleteById
    });
}
