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

    const favoritesArr = await Favorites.find({ id: request.query.id, type: request.query.type });
    const watchItemsArr = await Watchlist.find({ id: request.query.id, type: request.query.type });
    const ratingsArr = await Ratings.find({ id: request.query.id, type: request.query.type });

    const mediaCustomDetails = {
      isInFavorites: favoritesArr.length === 1,
      favoriteId: favoritesArr[0]?._id,
      isInWatchlist: watchItemsArr.length === 1, // change
      watchlistId: watchItemsArr[0]?._id,
      isInRatingList: ratingsArr.length === 1,
      rateMark: ratingsArr[0]?.rate,
      rateId: ratingsArr[0]?._id,

    };

    response.json(mediaCustomDetails);

  } catch (error) {
    next(error);
  }
})
