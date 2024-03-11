const db = require('../db/dbConfig')

const getRelatedProjects = async (proj_owner) => {
  const relatedProjects = await db.any('SELECT * FROM lp_projects WHERE proj_owner = $1',[proj_owner])
  return relatedProjects
}

const getRelatedProject = async (proj_owner,  proj_id ) => {
  // console.log('params in query ==>', proj_owner,proj_id )

  const project = await db.oneOrNone('SELECT * FROM lp_projects where id = $1 AND proj_owner = $2',[ proj_id, proj_owner])
  return project
}

const createNewProject = async (body, proj_owner) => {
  const newProject = await db.oneOrNone("INSERT INTO lp_projects (proj_name, start_date, proj_owner, proj_img, proj_description) VALUES ($1, $2, $3, $4, $5) RETURNING *", [body.proj_name, body.start_date, proj_owner, body.proj_img, body.proj_description])
  return newProject
}

const updateProject = async (body, proj_id) => {
  console.log('inside update--proj_id ==> ', proj_id)
  console.log('inside update--req.body ====> ', body)
  const updatedProject = await db.oneOrNone("UPDATE lp_projects SET proj_name=body.proj_name, start_date=$body.start_date, proj_owner=body.proj_owner, proj_img=body.proj_img, proj_description=body.prog_description] WHERE id=$1 RETURNING *", [proj_id])
  // const updatedProject = await db.oneOrNone("UPDATE lp_projects SET proj_name=$1, start_date=$2, proj_owner=$3, proj_img=$4, proj_description=$5] WHERE id=$6 RETURNING *", [proj_id])
  return updatedProject
}

module.exports = {
  getRelatedProjects,
  getRelatedProject,
  createNewProject,
  updateProject
}