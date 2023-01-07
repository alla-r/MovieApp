const listRouter = require('express').Router()
const Favorites = require('../models/favorites')

listRouter.get('/favorites', (request, response) => {
  Favorites.find({}).then(result => {
    response.json(result);
  })
})

listRouter.get('/favorites/:id', (request, response, next) => {
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

listRouter.post('/favorites', (request, response) => {
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

listRouter.delete('/favorites/:id', (request, response, next) => {
  Favorites.findByIdAndRemove(request.params.id)
  .then(item => {
    response.status(204).end();
  })
  .catch(error => {
    next(error)
  })
})

// listRouter.put('/api/list/favorites/:id', (request, response, next) => {
//   const body = request.body
//   const item = {
//     details: body.details,
//     rate: body.rate
//   }

//   // replace model name
//   Favorites.findByIdAndUpdate(request.params.id, item, { new: true })
//   .then(updatedItem => {
//     response.json(updatedItem);
//   })
//   .catch(error => {
//     next(error)
//   })
// })

module.exports = listRouter