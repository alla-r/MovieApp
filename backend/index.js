require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const Favorites = require('./models/favorites')

const app = express()
app.use(express.static('build'))
app.use(express.json())
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors())

// checked
app.get('/api/favorites', (request,response) => {
  Favorites.find({}).then(result => {
    response.json(result);
  })
})

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }
// app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}
app.use(errorHandler)

// checked
app.get('/api/favorites/:id', (request,response, next) => {
  Favorites.findById(request.params.id)
  .then(item => {
    if (item) {
      response.json(item);
    } else {
      response.status(404).end()
    }
    
  })
  .catch(error => {
    next(error)
  })
})

// checked
app.delete('/api/favorites/:id', (request,response, next) => {
  Favorites.findByIdAndRemove(request.params.id)
  .then(item => {
    response.status(204).end();
  })
  .catch(error => {
    next(error)
  })
})

app.put('/api/favorites/:id', (request,response, next) => {
  const body = request.body
  const item = {
    details: body.details,
    rate: body.rate
  }

  // replace model name
  Favorites.findByIdAndUpdate(request.params.id, item, { new: true })
  .then(updatedItem => {
    response.json(updatedItem);
  })
  .catch(error => {
    next(error)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// checked
app.post('/api/favorites', (request, response) => {
  const body = request.body;

  if (!body.details) {
    return response.status(400).json({
      error: 'content is missing'
    })
  }

  const favoriteItem = new Favorites({
    // ...body.details,
    id: body.details.id,
    userId: body.details.userId,
    type: body.details.type,
    poster: body.details.poster,
    title: body.details.title,
    overview: body.details.overview,
    firstAirDate: body.details.firstAirDate,
    date: body.details.date,
    timestamp: body.details.timestamp,
  })

  favoriteItem.save().then(savedItem => {
    response.json(savedItem)
  })
})

app.get('/api/mediaDetails', async (request,response, next) => {
  console.log(request.query)
  try {
    if (!request.query.id || !request.query.type || !request.query.userId) {
      return response.status(400).json({
        error: 'id, type or userId is missing'
      })
    }

    const favorite = await Favorites.find({ id: request.query.id, type: request.query.type });

    const mediaCustomDetails = {
      isInFavorites: favorite.length !== 0,
      favoriteId: favorite[0]?._id,
      isInWatchlist: false, // change
      isInRatingList: false, // change
      rateMark: 5, // change
    };

    response.json(mediaCustomDetails);

  } catch (error) {
    next(error);
  }
})
