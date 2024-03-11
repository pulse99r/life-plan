const express = require('express')
const peopleController = require("./controllers/peopleController")
const projectController = require("./controllers/projectController")

const app = express()
app.use(express.json())

// -------- project routes -------- 
app.use('/people', peopleController)
// app.use('/people', peopleController)
app.use('/projects', projectController)
app.use('/people/projects', peopleController)

// -------- Default or Home routes -------- 
app.get('/', (req, res) => {
  const msg = `
  Welcome to Life Plan!!
  `
  res.send(msg)
})

app.get('*', (req, res) => {
  res.send('The page you are looking for does not exist')
})

module.exports = app;
