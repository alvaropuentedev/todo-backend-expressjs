const { pool } = require('../db/conexion')


const getItems = (request, response) => {
    pool.query('SELECT * FROM todo.items', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getItemById = (request, response) => {
    const id_item = parseInt(request.params.id)

    pool.query('SELECT * FROM todo.items WHERE id_item = $1', [id_item], (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}

const createItem = (request, response) => {
  const { description } = request.body

  pool.query('INSERT INTO todo.items (description) VALUES ($1)', [description], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).json({ message: `Item added!` });
  })
}

const deleteItem = (request, response) => {
  const id_item = parseInt(request.params.id)

  pool.query('DELETE FROM todo.items WHERE id_item = $1', [id_item], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({ message: `Item deleted!` });
  })
}

const updateItem = (request, response) => {
  const id_item = parseInt(request.params.id)
  const { description } = request.body

  pool.query('UPDATE todo.items SET description = $1 WHERE id_item = $2', [description, id_item],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json({ message: `Item Update!` });
  })
}
  
  module.exports = {
    getItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
  };