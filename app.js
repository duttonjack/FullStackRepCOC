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




app.listen(expressPort, () => console.log(`Listening on port ${expressPort}`))
