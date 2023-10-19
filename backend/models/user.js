const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  // name: String,
  passwordHash: String,
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.itemId = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

module.exports = mongoose.model('User', userSchema);
