const express = require('express')
const connection = require('./dbConnect')
connection();

const app = express()
const port = 5000

app.use(express.json());
//Routes
const authRoute = require('./routes/auth')
app.use('/api/auth',authRoute)

const notesRoute = require('./routes/notes')
app.use('/api/notes', notesRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
