const listRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const Favorites = require('../models/favorites');
const Watchlist = require('../models/watchlist');
const Ratings = require('../models/ratings');
const User = require('../models/user');
const config = require('../utils/config');

const LIST_MODELS = {
  favorites: Favorites,
  watchlist: Watchlist,
  rate: Ratings,
};

const getTokenFrom = (request) => {
  const authorization = request.get('authorization');

  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '');
  }

  return null;
};

listRouter.get('/:listName', async (request, response, next) => {
  try {
    const list = request.params.listName;

    const decodedToken = jwt.verify(getTokenFrom(request), config.SECRET);
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token invalid' });
    }
    const user = await User.findById(decodedToken.id);

    // Do we need populate?
    // can we find by userid
    const notes = await LIST_MODELS[list].find({}).populate('user');

    const newNotes = notes.filter((note) => note.userId === user._id.toString());

    console.log(newNotes);

    response.json(newNotes);
  } catch (error) {
    next(error);
  }
});

listRouter.get('/:listName/:id', async (request, response, next) => {
  try {
    const list = request.params.listName;

    const item = await LIST_MODELS[list].findById(request.params.id);

    if (item) {
      response.json(item);
    } else {
      response.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

listRouter.post('/:listName', async (request, response, next) => {
  try {
    const body = request.body;
    const list = request.params.listName;
    const decodedToken = jwt.verify(getTokenFrom(request), config.SECRET);

    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token invalid' });
    }

    if (!body.details) {
      return response.status(400).json({
        error: 'content is missing',
      });
    }

    const user = await User.findById(decodedToken.id);

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
    });

    const savedItem = await item.save();
    response.json(savedItem);
  } catch (error) {
    next(error);
  }
});

listRouter.delete('/:listName/:id', async (request, response, next) => {
  try {
    // const decodedToken = jwt.verify(getTokenFrom(request), config.SECRET)
    // if (!decodedToken.id) {
    //   return response.status(401).json({ error: 'token invalid' })
    // }

    const list = request.params.listName;
    const removedItem = await LIST_MODELS[list].findByIdAndRemove(request.params.id);

    response.status(204).end();
  } catch (error) {
    next(error);
  }
});

listRouter.put('/:listName/:id', async (request, response, next) => {
  try {
    // const decodedToken = jwt.verify(getTokenFrom(request), config.SECRET)
    // if (!decodedToken.id) {
    //   return response.status(401).json({ error: 'token invalid' })
    // }

    const body = request.body;
    const list = request.params.listName;
    const { rate } = body;

    const updatedItem = await LIST_MODELS[list].findByIdAndUpdate(
      request.params.id,
      { rate },
      { new: true },
    );
    console.log(updatedItem);

    response.json(updatedItem);
  } catch (error) {
    next(error);
  }
});

module.exports = listRouter;
