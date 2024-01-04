import express from 'express'
import pg from 'pg'


const app = express()
const expressPort = 8001;
const { Pool } = pg;

const pool = new Pool ({
    user: 'duttonjack',
    database: 'chamberofcommerce',
    port: 5432
})

app.use(express.json())
app.use(express.static('public'))

app.get("/api/coc/owner", (req, res) => {
    pool.query('SELECT * FROM owner')
    .then((result) => res.status(200).json(result.rows))
    .catch((error) => res.status(500).json("Error Retriving Entries"))
})

app.get("/api/coc/business", (req, res) => {
    pool.query('SELECT * FROM business')
    .then((result) => res.status(200).json(result.rows))
    .catch((error) => res.status(500).json("Error Retriving Entries"))
})

app.post("/api/coc/business", (req, res) => {
    const  { name, numEmployees, ownerId }  = req.body
    console.log(name, numEmployees, ownerId)
    pool.query('INSERT INTO business (name, num_employees, owner_id) VALUES ($1, $2, $3)', [ name, numEmployees, ownerId ])
    .then((result) => res.status(200).json("Sucessfully Added Entry to business"))
    .catch((error) => res.status(500).json("Server Error adding to business DB"))
})

app.post("/api/coc/owner", (req, res) => {
    const  { name, age }  = req.body
    console.log('name: ', typeof name, name,  'age: ', typeof age, age)
    pool.query('INSERT INTO owner (name, age) VALUES ($1, $2)', [ name, age ])
    .then((result) => res.status(200).json("Sucessfully Added Entry to owner"))
    .catch((error) => res.status(500).json("Server Error adding to owner DB"))
})

app.delete("/api/coc/business/:id", (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    pool.query('DELETE FROM business WHERE id = $1', [ id ])
    .then((result) => res.status(200).json("Deleted entry"))
    .catch((error) => res.status(500).json('Error deleting entry from business'))
})

app.delete("/api/coc/owner/:id", (req, res) => {
    const id = Number(req.params.id)
    console.log(typeof id, id)
    pool.query('DELETE FROM owner WHERE id = $1', [ id ])
    .then((result) => res.status(200).json('Deleted entry'))
    .catch((error) => res.status(500).json('Error deleting entry from business'))
})

app.patch("/api/coc/owner/:id", (req, res) => {
    const id = req.params.id
    const [ body ] = req.body
    pool.query('UPDATE owner SET name = $1 WHERE id =  $2', [ body.name, id ])
    .then((result) => res.status(200).json("Entry in owner updated"))
    .catch((error) => res.status(500).json("Server Error updating entry in owner"))
})

app.patch("/api/coc/business/:id", (req, res) => {
    const id = req.params.id
    const {name, numEmployees, ownerId } = req.body
    pool.query('UPDATE business SET name = $1 WHERE id =  $2', [ body.name, id ])
    .then((result) => res.status(200).json("Entry in business updated"))
    .catch((error) => res.status(500).json("Server Error updating entry in business"))
})

app.put("/api/coc/owner/:id", (req, res) => {
    const id = req.params.id
    const {name, age} = req.body
    pool.query('UPDATE owner SET name = $1, age = $2 WHERE id = $3', [ name, age, id])
    .then((result) => res.status(200).json("Sucessfully updated entry in owners table"))
    .catch((error) => res.status(500).json("Server failed to update entry in owners table"))
})

app.put("/api/coc/business/:id", (req, res) => {
    const id = req.params.id
    const { name, numEmployees, ownerId} = req.body
    pool.query('UPDATE business SET name = $1, num_employees = $2, owner_id = $3 WHERE id = $4', [ name, numEmployees, ownerId, id])
    .then((result) => res.status(200).json("Sucessfully PUT entry in business table"))
    .catch((error) => res.status(500).json("Server failed to PUT entry in business table"))
})

app.listen(expressPort, () => console.log(`Listening on port ${expressPort}`))
