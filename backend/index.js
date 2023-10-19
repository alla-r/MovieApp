const app = require('./app');
const http = require('http');
const jwt = require('jsonwebtoken');
const config = require('./utils/config');
const logger = require('./utils/logger');
const Favorites = require('./models/favorites');
const Watchlist = require('./models/watchlist');
const Ratings = require('./models/ratings');
const User = require('./models/user');

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

///////////////
// move to a separate module
const getTokenFrom = (request) => {
  const authorization = request.get('authorization');

  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '');
  }

  return null;
};

app.get('/api/mediaDetails', async (request, response, next) => {
  try {
    const decodedToken = jwt.verify(getTokenFrom(request), config.SECRET);

    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token invalid' });
    }
    const user = await User.findById(decodedToken.id);

    if (!request.query.id || !request.query.type) {
      return response.status(400).json({
        error: 'id or type is missing',
      });
    }

    const favoriteItem = await Favorites.findOne({
      id: request.query.id,
      type: request.query.type,
      userId: user.id,
    });
    const watchItem = await Watchlist.findOne({
      id: request.query.id,
      type: request.query.type,
      userId: user.id,
    });
    const rateItem = await Ratings.findOne({
      id: request.query.id,
      type: request.query.type,
      userId: user.id,
    });

    const mediaCustomDetails = {
      isInFavorites: !!favoriteItem,
      favoriteId: favoriteItem?._id,
      isInWatchlist: !!watchItem,
      watchlistId: watchItem?._id,
      isInRatingList: !!rateItem,
      rateMark: rateItem?.rate,
      rateId: rateItem?._id,
    };

    response.json(mediaCustomDetails);
  } catch (error) {
    next(error);
  }
});
