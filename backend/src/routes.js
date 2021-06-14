const express = require('express')
const auth = require('./middlewares/auth')

const SessionsController = require('./Controllers/SessionsController')
const UserController = require('./Controllers/UserController')

const routes = express.Router()

routes.post('/sessions', SessionsController.create)

routes.use(auth)
routes.post('/users', UserController.create)
routes.get('/users', UserController.index)

module.exports = routes
