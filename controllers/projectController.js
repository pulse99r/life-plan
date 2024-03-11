const express = require('express')
const projectController = express.Router({
  mergeParams: true
})
const db = require('../db/dbConfig')

const {
  getRelatedProjects,
  getRelatedProject,
  createNewProject,
  updateProject
} = require('../queries/projects')

// all project route : index / Read
projectController.get('/', async (req, res) => {
  let proj_owner = req.params.id

  try {
    const projects = await getRelatedProjects(proj_owner)
    res.status(200).json(projects)
  } catch (error) {
    res.status(400).json({error: 'Server not responding'})
  }
})

projectController.get('/:proj_id',async (req, res) => {
  console.log('req.params ==>', req.params)
  const proj_id = req.params.proj_id
  const proj_owner = req.params.id

  const project = await getRelatedProject(proj_owner, proj_id, )
  
  if(project) {
    res.status(200).json(project)
  } else {
    const error = {error: `User id (${proj_owner}) does not exist!`}
    res.status(400).json(error)
  }
})

// Create new project : Create
projectController.post('/', async (req, res) => {
  const body = req.body
  const proj_owner = req.params.id
 
  if(body.proj_name) {
    const newProject = await createNewProject(body, proj_owner)
    res.status(201).json(newProject)
  } else {
    const error = {error: `Server error...unable to create record`}
    res.status(400).json({error: "Please include at least project name, start date, project owner, and project description"})
  }
})

// Update person Route : Update
projectController.put("/:id", async (req, res)=>{
  const proj_id = req.params.id
  const body = req.body
  console.log('inside Put--proj_id ==> ', proj_id)
  console.log('inside Put--req.body ====> ', body)
  const project = await db.oneOrNone("SELECT * FROM lp_projects WHERE id=$1", [proj_id])
  if(project.id && project.proj_name){
    if(body.proj_name && body.start_date && body.proj_owner && body.proj_img && body.proj_description){
      const project = await updateProject(body, proj_id)
      res.status(200).send(project)
    } else {
      res.status(400)(`Please include some values to be updated`)
    }
  } else {
    res.status(400)(`The project you're looking for (project id: ${proj_id}) does not exist!`)
  }
})

// Delete person : Delete
projectController.delete("/:id", async (req, res) => {
  const id = req.params.id
  const project = await db.oneOrNone("SELECT * FROM lp_projects WHERE id=$1", [id])
  if(project){
    let deletedProject = await db.oneOrNone("DELETE * FROM lp_projects WHERE id=$1 RETURNING *", [id])
    res.status(204).json(deletedProject)
  } else {
    res.status(418).json({error: `A person with id ${id} does not exist in our database`})
  }
})

module.exports = projectController