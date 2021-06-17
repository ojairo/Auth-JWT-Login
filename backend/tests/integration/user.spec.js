const req = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')
const {validate, version} = require('uuid')

describe('Users', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
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
})
