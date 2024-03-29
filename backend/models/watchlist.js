const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  id: String,
  type: String,
  poster: String,
  title: String,
  overview: String,
  date: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  userId: String,
  firstAirDate: String,
  timestamp: Number,
});

listSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.itemId = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Watchlist', listSchema);
