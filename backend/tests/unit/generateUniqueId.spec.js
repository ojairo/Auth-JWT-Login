const generateUniqueId = require('../../src/utils/generateUniqueId')
const {validate, version} = require('uuid')

describe('Generate unique ID', ()=>{
  it('should generate unique ID', () => {
    const id = generateUniqueId()
    expect((
      validate(id) && version(id) === 4))
      .toBe(true)
  })
})
