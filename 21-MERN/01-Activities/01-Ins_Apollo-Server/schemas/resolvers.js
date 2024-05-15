const { Class } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    },
    classHoursAll: async () => {
      return await Class.find({});
    },
    classHoursOne: async (parent, args) => {
      return await Class.findById(args.id).populate('professor');
    }
  }
};

module.exports = resolvers;
