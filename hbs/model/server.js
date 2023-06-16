const express = require('express')
//Instalar el paquete dotenv
const dbConnection = require('../database/config')

const cors = require('cors');

const bodyParser = require('body-parser');

class server{
    
    constructor () {
        this.app = express()

        this.port = process.env.PORT

        this.hurtoPath = '/api/hurto' //Ruta pública de la API

        this.middlewares()//Seguridad

        this.routes()

        this.dbConectar()

    }

    middlewares() //Directorio Publico
    {
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(cors());
        this.app.use(bodyParser.json())
    }


    routes()
    {
        this.app.use(this.hurtoPath, require('../routes/hurtos'))

    }

    async dbConectar(){
        await dbConnection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

//Exportar la clase server
module.exports = server