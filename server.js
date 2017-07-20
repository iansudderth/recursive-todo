const express = require('express')
const next = require('next')
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
const mongoose = require('mongoose')
const TodoState = require('./schema/todoListSchema.js')
const _ = require('lodash')
const seedDB = require('./schema/seed.js')
const generateNewTodoList = require('./schema/generateNewTodoList.js')



var dburl = process.env.DATABASEURL || 'mongodb://localhost/portfolio';
mongoose.connect(dburl)


if(_.includes(process.argv,"--seed")){seedDB();}



app.prepare()
.then(() => {
  const server = express()
  server.use(compression());

  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })

  // server.get('/b', (req, res) => {
  //   return app.render(req, res, '/a', req.query)
  // })


  server.get('/todo', (req, res) => {
    return  app.render(req, res, '/todo', req.query)
  })

  server.get('/todo/:id', (req,res) => {
    TodoState.findOne({_id:req.params.id}, (error, initialState) => {
      if(error){
        console.log("State not found, making new state and redirecting")
        TodoState.create(generateNewTodoList(), (error, newState) => {
          if(error){
            console.log(error)
              res.send("Something Went Wrong")
            } else {
              console.log('new state made at ', newState._id)
              res.redirect(`/todo/${newState._id}`)
            }
          })
      } else {
        console.log('todo list found')
        const mergedQuery = Object.assign({}, req.query, {initialState})
        return  app.render(req, res, '/todo', mergedQuery)
      }
    })
  })

  server.get('/', (req,res) => {
    return app.render(req, res, '/todo', req.query)
  })

  server.get('/api', (req,res) => {
    return res.send('wassup')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})


