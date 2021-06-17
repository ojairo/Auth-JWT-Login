const connection = require('../database/connection')
const bcrypt = require('bcrypt')
const generateUniqueToken = require('../utils/generateUniqueToken')

module.exports = {
  async create(req, res){
    const {user, pass} = req.body
    const [checkUser] = await connection('users')
    .where('user', '=', user)
    .select('*')

    if(!checkUser){
      return res.status(404).send({message: 'User not found.'})
    }

    const passUnhashed = await bcrypt.compare(pass, checkUser.pass)
    if(!passUnhashed){
      return res.status(404).send({message: 'Incorrect password for this user.'})
    }

    const token = generateUniqueToken(checkUser.id)
    res.header('Authorization', token)
    return res.status(200).json({checkUser, token})

  }
}
