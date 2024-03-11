const db = require('../db/dbConfig')

const getAllPeople = async () => {
  const users = await db.any('SELECT * FROM lp_users')
  return users
}

const getPerson = async (id) => {
  const person = await db.oneOrNone('SELECT * FROM lp_users where id = $1',[id])
  return person
}

const createPerson = async (body) => {
  const person = await db.oneOrNone("INSERT INTO lp_users (first_name, last_name, email, phone, password_hash, profile_img, dob, gender, city, zip_code) VALUES ($1,$2,$3,$4,$5,$6, $7, $8, $9, $10) RETURNING *", [body.first_name, body.last_name, body.email, body.phone, body.password_hash, body.profile_img, body.dob, body.gender, body.city, body.zip_code])
  return person
}

const updatePerson = async (body, id) => {
  const updatedPerson = await db.oneOrNone("UPDATE lp_users SET first_name=$1, last_name=$2, email=$3, phone=$4, password_hash=$5, profile_img=$6 FROM lp_users WHERE id=$7 RETURNING *", [id])
  return updatedPerson
}

const deletePerson = async (id) => {
  const deletedPerson = await db.oneOrNone("DELETE * FROM lp_users WHERE id=$1 RETURNING *", [id])
  return deletedPerson
}

module.exports = {
  getAllPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson
}

/*
  login
     people
       createperson
       projects
     
*/