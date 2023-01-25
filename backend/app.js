const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const listRouter = require('./controllers/lists')
const usersRouter = require('./controllers/users')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/list', listRouter)
app.use('/api/users', usersRouter)
// app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

// morgan.token('body', (req, res) => JSON.stringify(req.body));
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

module.exports = app