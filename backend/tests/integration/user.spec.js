const req = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')
const generateUniqueToken = require('../../src/utils/generateUniqueToken')
const generateUniqueId = require('../../src/utils/generateUniqueId')

const {validate, version} = require('uuid')

describe('Users', () => {
  beforeAll(async () => {
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.migrate.rollback()
    await connection.destroy()
  })

  it('should be able to create a new user', async () => {
    const res = await req(app)
    .post('/users')
    // set('Authorization', token) 51:54
    .send({
      name:'Jairo Júnior',
	    email: 'jairo@gmail.com',
	    user: 'ojairo',
	    pass: 'ojairo'
    })
    expect(res.body).toHaveProperty('id')
    expect((
      validate(res.body.id) && version(res.body.id) === 4))
      .toBe(true)
  })

  it('should be able to get all users', async () => {
    const id = generateUniqueId()
    const token = generateUniqueToken(id)
    const {body} = await req(app).get('/users')
    .set('Authorization', token)
    expect(body.users[0]).toHaveProperty('id')
  })
})
