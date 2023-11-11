const conexion = require('../database/db');

// Lógica para guardar los datos en la base de datos
exports.save = (req, res) => {
    const {
        Nitdetuempresa,
        Nombredelaempresa,
        Direcciondecorreo,
        Confirmardirecciondecorreo,
        Numerodetelefono,
        Contraseña,
        Confirmarcontraseña,
        Queservicioprestaralaempresa
    } = req.body;

    const query = 'INSERT INTO registroempresa SET ?';
    const values = {
        Nitdetuempresa,
        Nombredelaempresa,
        Direcciondecorreo,
        Confirmardirecciondecorreo,
        Numerodetelefono,
        Contraseña,
        Confirmarcontraseña,
        Queservicioprestaralaempresa
    };

    console.log(req.body);

    conexion.query(query, values, (error, results) => {
        if (error) {
            console.error('Error al insertar en la base de datos:', error);
            res.status(500).send('Error interno del servidor');
        } else {
            console.log('Datos guardados en la base de datos');
            res.redirect('/');
        }
    });
};

// Lógica para actualizar los datos en la base de datos
exports.update = (req, res) => {
    const idRegistroEmpresa = req.params.idRegistroEmpresa;
    const updatedData = req.body;

    const query = 'UPDATE registroempresa SET ? WHERE idRegistroEmpresa = ?';
    const values = {
        Nitdetuempresa: updatedData.Nitdetuempresa,
        Nombredelaempresa: updatedData.Nombredelaempresa,
        Direcciondecorreo: updatedData.Direcciondecorreo,
        Confirmardirecciondecorreo: updatedData.Confirmardirecciondecorreo,
        Numerodetelefono: updatedData.Numerodetelefono,
        Contraseña: updatedData.Contraseña,
        Confirmarcontraseña: updatedData.Confirmarcontraseña,
        Queservicioprestaralaempresa: updatedData.Queservicioprestaralaempresa
    };

    conexion.query(query, [values, idRegistroEmpresa], (error, results) => {
        if (error) {
            console.error('Error al actualizar en la base de datos:', error);
            res.status(500).send('Error interno del servidor');
        } else {
            console.log('Datos actualizados en la base de datos');
            res.redirect('/');
        }
    });
};

//logica para eliminar un registro
exports.delete = (req, res) => {
    const idRegistroEmpresa = req.params.idRegistroEmpresa;
    
    const query = 'DELETE FROM registroempresa WHERE idRegistroEmpresa = ?'
    
    conexion.query(query, [idRegistroEmpresa], (error, results) => {
        if (error) {
            console.error('Error al eliminar en la base de datos:', error);
            res.status(500).send('Error interno del servidor');
        } else {
            console.log('Registro eliminado de la base de datos');
            res.redirect('/');
        }
    });
};
