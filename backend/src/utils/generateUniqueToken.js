const jwt = require('jsonwebtoken')
const {expiresIn, secret} = require('../config/auth.json')

module.exports = (id) => {
    const token = jwt.sign({}, secret, {
      subject: id,
      expiresIn,
    })
    return 'Bearer ' + token
}
