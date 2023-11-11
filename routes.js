const express = require('express');
const router = express.Router();

const conexion = require('./database/db');
const crud = require('./controllers/crud');

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM registroempresa;', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    });
});

// Ruta para crear registro de empresa
router.get('/create', (req, res) => {
    res.render('create');
});

// Ruta para editar un registro
router.get('/edit/:idRegistroEmpresa', (req, res) => {
    const idRegistroEmpresa = req.params.idRegistroEmpresa;
    conexion.query('SELECT * FROM registroempresa WHERE idRegistroEmpresa = ?', [idRegistroEmpresa], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});


//Ruta para eliminar un registro
router.get('/delete/:idRegistroEmpresa', (req, res) => {
    const idRegistroEmpresa = req.params.idRegistroEmpresa;
    conexion.query('DELETE FROM registroempresa WHERE idRegistroEmpresa = ?', [idRegistroEmpresa], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    });
});




// Ruta para guardar un nuevo registro
router.post('/save', crud.save);

// Ruta para actualizar un registro existente
router.post('/update/:idRegistroEmpresa', crud.update);

//Ruta para eliminar un registro
router.get('/delete/:idRegistroEmpresa', crud.delete);


module.exports = router;


