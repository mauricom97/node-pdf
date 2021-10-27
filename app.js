const express = require('express')
const port = 3000
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require('./routes/index')(app)

app.listen(port, () => {
    console.log(`Server in ${port}`)
})