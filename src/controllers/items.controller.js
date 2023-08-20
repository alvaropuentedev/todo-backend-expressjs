const { pool } = require('../db/conexion')


const getItems = (request, response) => {
    pool.query('SELECT * FROM todo_items', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getItemById = (request, response) => {
    const id_item = parseInt(request.params.id)

    pool.query('SELECT * FROM todo_items WHERE id_item = $1', [id_item], (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}
  
  module.exports = {
    getItems,
    getItemById,
  };