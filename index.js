const express = require('express')
const bodyParser = require('body-parser')
const patientsRouter = require('./routes/patients')
const indexRouter = require('./routes/index')
require('./mongo-connection')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/patients', patientsRouter)
app.use('/', indexRouter)

app.listen(3000, () => {
  console.log('started listening on 3000')
})
