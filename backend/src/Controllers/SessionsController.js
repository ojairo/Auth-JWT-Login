const connection = require('../database/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {expiresIn, secret} = require('../config/auth.json')

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

    const token = jwt.sign({id: checkUser.id}, secret, {
      expiresIn,
    })


    return res.status(200).json({checkUser, token})

  }
}
