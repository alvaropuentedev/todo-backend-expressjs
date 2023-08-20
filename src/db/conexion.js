const Pool = require('pg').Pool



const pool = new Pool({
  user: 'fl0user',
  host: 'ep-sweet-recipe-27598555.eu-central-1.aws.neon.tech',
  database: 'todo',
  password: 'OSQIKNsEro03',
  port: 5432,
  ssl: {
    sslmode: 'require'
  }
})

module.exports = {
    pool,
  };

// const getItems = (request, response) => {
//     pool.query('SELECT description FROM todo_items', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }
  
//   module.exports = {
//     getItems,
//   };