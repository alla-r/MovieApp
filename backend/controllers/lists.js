const listRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Favorites = require('../models/favorites');
const Watchlist = require('../models/watchlist');
const Ratings = require('../models/ratings');
const User = require("../models/user")
const config = require('../utils/config')

const LIST_MODELS = {
  favorites: Favorites,
  watchlist: Watchlist,
  rate: Ratings
}

const getTokenFrom = request => {
  const authorization = request.get('authorization')

  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }

  return null
}

listRouter.get('/:listName', async (request, response) => {
  const list = request.params.listName;

  const userId = "63c3157381900870daba5d9a"
  const user = await User.findById(userId)

  const notes = await LIST_MODELS[list].find({}).populate("user");
  // console.log(notes)

  const newNotes = notes.filter((note) => {
    console.log(note.userId)
    console.log(userId)
    return note.userId === userId
  });

  console.log(newNotes)

  response.json(newNotes);
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

listRouter.post('/:listName', async (request, response) => {
  const body = request.body;
  const list = request.params.listName;
  const decodedToken = jwt.verify(getTokenFrom(request), config.SECRET)

  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  }

  if (!body.details) {
    return response.status(400).json({
      error: 'content is missing'
    })
  }

  const user = await User.findById(decodedToken.id)

  const item = new LIST_MODELS[list]({
    id: body.details.id,
    user: user,
    userId: user._id,
    type: body.details.type,
    poster: body.details.poster,
    title: body.details.title,
    overview: body.details.overview,
    firstAirDate: body.details.firstAirDate,
    date: body.details.date,
    timestamp: body.details.timestamp,
    rate: body.details.rate,
  })

  const savedItem = await item.save()
  response.json(savedItem)
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