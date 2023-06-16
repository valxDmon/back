const { response } = require('express');
const Hurto = require('../model/hurto');

const getHurto = async (req, res = response) => {
  let mensaje = ''
  try {
      //Consulta en la colección
      const hurto = await Hurto.find()
      mensaje = hurto
  } catch (error) {
      mensaje = error
  }

  res.json({
      Hurto: mensaje
  })

}

const postHurto = async (req, res = response) => {

  const body = req.query ;
  let mensaje = ''
  const hurto = new Hurto(body)
  console.log(body)
  try {
      await hurto.save()
      mensaje = 'Hurto registrado exitosamente'
  } catch (error) {
      mensaje = error
  }

  res.json({
      mensaje
  })

}
const putHurto = async (req, res = response) => {
    //Actualización de datos
    const body = req.query //Desestructuración
    console.log(body)

    let mensaje = ''

    try {
        await Hurto.findOneAndUpdate({ Direccion: body.Direccion, Latitud: body.Latitud, Longitud: body.Logitud, Descripcion: body.Descripcion })
        mensaje = 'Hurto modificado exitosamente'


    } catch (error) {
        mensaje = error
    }
    //console.log('---------------'+mensaje)
    res.json({
        mensaje: mensaje
    })

}

const deleteHurto = async (req, res = response) => {
    const body = req.query
    let mensaje = ''

    try {
        await Hurto.deleteOne({ Direccion: body.Direccion })
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje})

}

module.exports = {
  getHurto,
  postHurto,
  putHurto,
  deleteHurto
};
