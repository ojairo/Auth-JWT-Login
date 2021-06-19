const jwt = require('jsonwebtoken')
const {secret} = require('../config/auth.json')

module.exports= (req, res, next) => {
  const authHeader = req.headers.authorization
  const verifyParts = authHeader.split(' ')
  if(!verifyParts.length === 2){
    return res.status(400).send({error: 'Invalid token parts.'})
  }
  const [, token] = verifyParts
  jwt.verify(token, secret, (err, decoted) => {
    if(err){
      return res.status(400).send({error: 'Invalid token.'})
    }
    req.userId = decoted.sub
    return next()
  })

}
