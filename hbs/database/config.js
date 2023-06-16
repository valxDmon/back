const {mongoose} = require ('mongoose')

dbConnection =async () =>{
    try {
        await (mongoose.connect(process.env.MONGO_CNN))
        console.log('Conexion Establecida')
    } catch (e) {
        console.log(e)
    }
}

module.exports = dbConnection