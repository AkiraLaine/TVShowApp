const mongoose = require('./index')

const User = mongoose.model('User', {
  id: String,
  username: String
})

module.exports = User;