const {Schema,model}= require('mongoose') //importa libreria mongoose

//Definir la estructura de la colección
const HurtoSchema = Schema({
    Direccion:{
        type: String,
        required:[true, 'La direccion es obligatorio']
    },


    Latitud:{
        type: Number,
       required:[true, 'La latitud es obligatorio'],
       minlength: [6.13,'minimo 6.13'],
       maxlength: [6.217,'maximo 6.217']
    },

    Longitud:{
        type: Number,
        required:[true, 'La longitud es obligatorio'],
        minlength: [-75.34,'minimo -75.34'],
        maxlength: [-75.567,'maximo -75.567']
        
    },
    Descripcion:{
        type: String,
        required:[true, 'La descripcion es obligatorio']
    },
    Fecha:{
        type: Date,
        default:Date.now,
        required:[true, 'La Fecha es obligatorio']
    }
})


module.exports = model('Hurto', HurtoSchema)
