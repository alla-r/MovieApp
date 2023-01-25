const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')
const Favorites = require('./models/favorites')
const Watchlist = require('./models/watchlist')
const Ratings = require('./models/ratings')


const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

///////////////
// move to a separate module
app.get('/api/mediaDetails', async (request,response, next) => {
  try {
    if (!request.query.id || !request.query.type || !request.query.userId) {
      return response.status(400).json({
        error: 'id, type or userId is missing'
      })
    }

    const favoriteItem = await Favorites.findOne({ id: request.query.id, type: request.query.type });
    const watchItem = await Watchlist.findOne({ id: request.query.id, type: request.query.type });
    const rateItem = await Ratings.findOne({ id: request.query.id, type: request.query.type });

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
})
