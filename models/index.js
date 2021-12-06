const Post = require('./post');
const User = require('./user');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };