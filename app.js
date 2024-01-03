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
    .then((result) => {
        console.log(result.rows)
        res.status(200).json("Sucessfully Retrived Entries")
    })
    .catch((error) => res.status(500).json("Error Retriving Entries"))
})

app.get("/api/coc/business", (req, res) => {
    pool.query('SELECT * FROM business')
    .then((result) => {
        console.log(result.rows)
        res.status(200).json("Sucessfully Retrived Entries")
    })
    .catch((error) => res.status(500).json("Error Retriving Entries"))
})

app.post("/api/coc/business", (req, res) => {
    const [ entry ] = req.body
    console.log("in server Post: ", entry.name, entry.numEmployees, entry.ownerId)
    pool.query('INSERT INTO business (name, num_employees, owner_id) VALUES ($1, $2, $3)', [ entry.name, entry.numEmployees, entry.ownerId ])
    .then((result) => {
        console.log(result.rows)
        res.status(200).json("Sucessfully Added Entry to business")
    })
    .catch((error) => res.status(500).json("Server Error adding to business DB"))
})

app.post("/api/coc/owner", (req, res) => {
    const [ entry ] = req.body
    console.log("in server Post: ", entry.name, entry.age,)
    pool.query('INSERT INTO owner (name, age) VALUES ($1, $2)', [ entry.name, entry.age ])
    .then((result) => {
        res.status(200).json("Sucessfully Added Entry to owner")
    })
    .catch((error) => res.status(500).json("Server Error adding to owner DB"))
})

app.delete("/api/coc/business/:id", (req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM business WHERE id = $1', [ id ])
    .then((result) => res.status(200).json('Entry deleted from business'))
    .catch((error) => res.status(500).send('Error deleting entry from business'))
})

app.delete("/api/coc/owner/:id", (req, res) => {
    const id = req.params.id
    pool.query('DELETE FROM owner WHERE id = $1', [ id ])
    .then((result) => res.status(200).json('Entry deleted from owner'))
    .catch((error) => res.status(500).send('Error deleting entry from owner'))
})

app.listen(expressPort, () => console.log(`Listening on port ${expressPort}`))
