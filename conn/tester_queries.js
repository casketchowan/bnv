const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'bookapi',
  password: 'password',
  port: 5432
})

//queries listed below:


//gets all users
const getUsers = (req, res) => {
  pool.query('SELECT * FROM books ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}


//gets a single user by id
const getUserById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM books WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}


//posts a new user
const createUser = (req, res) => {
  const { booktitle, publisher } = req.body

  pool.query('INSERT INTO books (booktitle, publisher) VALUES ($1, $2)', [booktitle, publisher], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Book added with ID: ${results.insertId}`)
  })
}

//puts updated data in an existing user
const updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const { booktitle, publisher } = req.body

  pool.query(
    'UPDATE books SET booktitle = $1, publisher = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Book modified with ID: ${id}`)
    }
  )
}

//deletes a user
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('DELETE FROM books WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}