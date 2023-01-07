const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')
const Favorites = require('./models/favorites')

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
