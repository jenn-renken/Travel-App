const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    user_id: 1,
    location:'Paris',
    cost: 4000,
    description: 'this is a test'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 2,
    location:'Berlin',
    cost: 4000,
    description: 'this is a test'
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 3,
    location:'london',
    cost: 4000,
    description: 'this is a test'
  }
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
