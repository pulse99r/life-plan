const express = require('express')
const peopleController = express.Router()
const projectsController = require('./projectController')
const db = require('../db/dbConfig')
peopleController.use('/:id/projects', projectsController)

const {
  getAllPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson

} = require('../queries/people')

// * * * *  V A L I D A T I O N  * * * * 
function validateId (req, res, next){
  console.log('logging validate function: ', req.params.id)

  const id = req.params.id
  if (id < 1 || id != Number.isInteger(Number(id))){
    console.log('keep it simple simon!')
    res.status(400).send('Please enter a valid integer id')
  }

  next()
}
function validateBody (req, res, next){
  console.log('logging validate body function: ', req.params.id)

  const id = req.body.
  if (id < 1 || id != Number.isInteger(Number(id))){
    console.log('keep it simple simon!')
    res.status(400).send('Please enter a valid integer id')
  }

  next()
}
const validatePersonExist =() => {
  
}
// all people route : index / Read
peopleController.get('/', async (req, res) => {
  try {
    const people = await getAllPeople()
    res.status(200).json(people)
  } catch (error) {
    res.status(400).json({error: 'Server not responding'})
  }
})

// single person : show / Read
peopleController.get('/:id', validateId, async (req, res) => {
  const id = req.params.id
  const person = await getPerson(id)
  if(person) {
    res.status(200).json(person)
  } else {
    const error = {error: `User id (${id}) does not exist!`}
    res.status(400).json(error)
  }
})

// Create new people : Create
peopleController.post('/new', validateId, validateBody async (req, res) => {
  const body = req.body
 
  if(body.first_name && body.last_name) {
    const newPerson = await createPerson(body)
    res.status(201).json(newPerson)
  } else {
    const error = {error: `project id (${id}) does not exist!`}
    res.status(400).json({error: "Please include first_name, last_name, email, phone, password, profile_img"})
  }
})

// Update person Route : Update
peopleController.put("/:id", async (req, res)=>{
  const id = req.params.id
  const body = req.body
  console.log('entered update route')
  console.log('req.body => ', req.body)
  const user = await db.oneOrNone("SELECT * FROM lp_users WHERE id=$1", [id])
  if(user){
    if(body.first_name && body.last_name && body.email && body.phone && body.password_hash && body.profile_img){
      const user = updatePerson(body,id)
      res.status(200).send(user)
    } else {
      res.status(400)(`Please include some values to be updated`)
    }
  } else {
    res.status(400)(`The project you're looking for (project id: ${id}) does not exist!`)
  }
})

// Delete person : Delete
peopleController.delete("/:id", async (req, res) => {
  const id = req.params.id
  const user = await getPerson(id)
  if(user){
    let deletedUser = await deletePerson(id)
    res.status(204).json(deletedUser)
  } else {
    res.status(418).json({error: `A person with id ${id} does not exist in our database`})
  }
})

module.exports = peopleController