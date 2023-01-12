const listRouter = require('express').Router()
const Favorites = require('../models/favorites');
const Watchlist = require('../models/watchlist');
const Ratings = require('../models/ratings');

const LIST_MODELS = {
  favorites: Favorites,
  watchlist: Watchlist,
  rate: Ratings
}

listRouter.get('/:listName', (request, response) => {
  const list = request.params.listName;

  LIST_MODELS[list].find({}).then(result => {
    response.json(result);
  })
})

listRouter.get('/:listName/:id', (request, response, next) => {
  const list = request.params.listName;

  LIST_MODELS[list].findById(request.params.id)
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

listRouter.post('/:listName', (request, response) => {
  const body = request.body;
  const list = request.params.listName;

  if (!body.details) {
    return response.status(400).json({
      error: 'content is missing'
    })
  }

  const item = new LIST_MODELS[list]({
    id: body.details.id,
    userId: body.details.userId,
    type: body.details.type,
    poster: body.details.poster,
    title: body.details.title,
    overview: body.details.overview,
    firstAirDate: body.details.firstAirDate,
    date: body.details.date,
    timestamp: body.details.timestamp,
    rate: body.details.rate,
  })

  item.save().then(savedItem => {
    response.json(savedItem)
  })
})

listRouter.delete('/:listName/:id', (request, response, next) => {
  const list = request.params.listName;

  LIST_MODELS[list].findByIdAndRemove(request.params.id)
    .then(item => {
      response.status(204).end();
    })
    .catch(error => {
      next(error)
    })
})

listRouter.put('/:listName/:id', (request, response, next) => {
  const body = request.body
  const list = request.params.listName;
  const { rate } = body;

  LIST_MODELS[list].findByIdAndUpdate(request.params.id, { rate }, { new: true })
    .then(updatedItem => {
      console.log(updatedItem)
      response.json(updatedItem);
    })
    .catch(error => {
      next(error)
    })
})

module.exports = listRouter