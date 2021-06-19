const express = require('express')
const auth = require('./middlewares/auth')
const {Joi, Segments, celebrate} = require('celebrate')

const SessionsController = require('./Controllers/SessionsController')
const UserController = require('./Controllers/UserController')

const routes = express.Router()

routes.post('/sessions', SessionsController.create)
routes.post('/users', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    user: Joi.string().required(),
    pass: Joi.string().required().min(8),
  })
}), UserController.create)

routes.get('/users', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required().regex(/^Bearer /i),
  }).unknown(),
}), auth, UserController.index)

module.exports = routes
