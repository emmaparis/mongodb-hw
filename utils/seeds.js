const connection = require('../config/connection');
const {Thought, User} = require('../models')
const {userSeeds, thoughtSeeds} = require('./data')

// connection.once('open', async => {
    // Thought.deleteMany({});
    // User.deleteMany({});
    // await.User.collection.insertOne(userSeeds)
    // console.log(userSeeds)
    // console.log(User)
    User.insertOne({username: 'shannyaN',
    email: 'shannya658@gmail.com',
    },
    (err) => (err ? handleError(err) : console.log('Created new document')))
    console.log('table built')
// })