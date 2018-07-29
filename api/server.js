const express = require('express')
const mongoose = require('mongoose')
const bluebird = require('bluebird')
const _ = require('lodash')
const bodyParser = require('body-parser')

const {port, dev, dburl} = require('./config')

// =======================
// Mongoose Cofigs
// =======================

mongoose.connect(dburl)
mongoose.Promise = bluebird
const db = mongoose.connection

// =======================
// Seeds
// =======================

const todoSeedDB = require('./seeds/todoSeed')

if (_.includes(process.argv, '--seed')) {
  todoSeedDB()
}

// =======================
// App Setup
// =======================
const server = express()
server.use(bodyParser.json())

// =======================
// Routes
// =======================

server.get('/', (req, res) => {
  res.send('YO!')
})

// =======================
// Listener
// =======================

server.listen(port, (err) => {
  if (err) throw err
  console.log(`Recursive todo is ready on port ${port}`)
})
