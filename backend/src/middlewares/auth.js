const jwt = require('jsonwebtoken')
const {secret} = require('../config/auth.json')

module.exports= (req, res, next) => {
  const authHeader = req.headers.authorization
  if(!authHeader){
    return res.status(404).send({error: 'No token provided.'})
  }
  const verifyParts = authHeader.split(' ')
  if(!verifyParts.length === 2){
    return res.status(400).send({error: 'Invalid token parts.'})
  }

  const [scheme, token] = verifyParts
  if(!/^Bearer$/i.test(scheme)){
    return res.status(400).send({error: 'Unformatted token'})
  }

  jwt.verify(token, secret, (err, decoted) => {
    if(err){
      return res.status(400).send({error: 'Invalid token.'})
    }
    req.userId = decoted.id
    return next()
  })

}
