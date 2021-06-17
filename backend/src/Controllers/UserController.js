const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')
const bcrypt = require('bcrypt')

module.exports = {
  async index(req, res){
    const userId = req.userId
    const users = await connection('users').select('*')
    return res.json({users, userId})
  },

  async create(req, res){
    const {user, name, email, pass} = req.body
    const passHashed = await bcrypt.hash(pass, 8)
    const idUnique = generateUniqueId()
    const [id] = await connection('users')
    .insert({
      id: idUnique,
      name,
      email,
      user,
      pass: passHashed
    })

    if(id){
      return res.json({id: idUnique})
    }

    return res.status(400).json({message: 'User is not inserted.'})
  }
}
