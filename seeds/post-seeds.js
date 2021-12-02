const { Post } = require('../models');

const postdata = [
  {
    title: 'A Parisian Adventure',
    user_id: 1,
    location:'Paris',
    cost: 4000,
    description: 'Visited Louvre, Versailles, and ate lots of good food!'
  },
  {
    title: 'Oktoberfest in Berlin',
    user_id: 2,
    location:'Berlin',
    cost: 2500,
    description: 'Attended Oktoberfest festitivies and drank lots of delicious beer and ate pretzels!'
  },
  {
    title: 'Looking for the Queen in London',
    user_id: 3,
    location:'London',
    cost: 5000,
    description: 'Went to Harrods, Buckingham Palace, and the National Gallery.'
  },
  {
    title: 'Italian Food and Art Tour',
    user_id: 4,
    location:'Florence',
    cost: 4500,
    description: 'Saw all the best sights in Florence such as the Duomo and Uffizi, plus ate tons of delicious food and drank the best wine.'
  }
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
