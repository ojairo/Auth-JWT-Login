const jwt = require('jsonwebtoken')
const {expiresIn, secret} = require('../config/auth.json')

module.exports = (id) => {
    const tokenStr = jwt.sign({}, secret, {
      subject: id,
      expiresIn,
    })
    return 'Bearer ' + tokenStr
}
