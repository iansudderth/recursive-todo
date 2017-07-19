const express = require('express')
const next = require('next')
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

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
    const mergedQuery = Object.assign({}, req.query, {params:req.params}, {seedState: seedState})
    return  app.render(req, res, '/todo', mergedQuery)
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


const seedState =  { items:{
  1001: {
    id: 1001,
    content: "Random seed from server 1",
    complete: false,
    color:'red',
    parent: "root",
    completeChildren: [],
    incompleteChildren: [1004]
  },
  1002: {
    id: 1002,
    content: "Random seed from server 2",
    complete: false,
    color:'red',
    parent: "root",
    completeChildren: [],
    incompleteChildren: [1003]
  },
  1003: {
    id: 1003,
    content: "Random seed from server 3",
    complete: false,
    color:'red',
    parent: 1002,
    completeChildren: [],
    incompleteChildren: []
  },
  1004: {
    id: 1004,
    content: "Random seed from server 4",
    complete: false,
    color:'red',
    parent: 1001,
    completeChildren: [],
    incompleteChildren: []
  },
  1005: {
    id: 1005,
    content: "Random seed from server 5",
    complete: true,
    color:'red',
    parent: "root",
    completeChildren: [],
    incompleteChildren: []
  },
  root: {
    color:'red',
    completeChildren: [1005],
    incompleteChildren: [1001, 1002]
  }
}};
