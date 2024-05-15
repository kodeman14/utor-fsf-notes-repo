const db = require('../config/connection');
const { Thought } = require('../models');
const thoughtSeeds = require('./thoughtSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Thought', 'thoughts');

  await Thought.create(thoughtSeeds);

  console.log('all done!');
  process.exit(0);
});
