const generateUniqueToken = require('../../src/utils/generateUniqueToken')
const generateUniqueId = require('../../src/utils/generateUniqueId')

const jwt = require('jsonwebtoken')
const {secret} = require('../../src/config/auth.json')

describe('Generate unique TOKEN', () => {
  it('should generate unique token', () => {
    const id = generateUniqueId()
    const tokenUnformatted = generateUniqueToken(id)
    const [, token] = tokenUnformatted.split(' ')
    expect(
      jwt.verify(token, secret, (err, decoted) => {
        if(err){
          return false
        }
        return true
      })
    ).toBe(true)
  })

  it('should return same ID', () => {
    const id = generateUniqueId()
    const tokenUnformatted = generateUniqueToken(id)
    const [, token] = tokenUnformatted.split(' ')
    expect(
      jwt.verify(token, secret, (err, decoted) => {
        if(err){
          return false
        }
        return decoted.sub === id ? true : false
      })
    ).toBe(true)
  })
})
