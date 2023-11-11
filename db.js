const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:  '9f6f07fa',
    database: 'basededatosjava'
})

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('¡conectado a la BD MYSQL felicidades!');

})


module.exports = conexion;
