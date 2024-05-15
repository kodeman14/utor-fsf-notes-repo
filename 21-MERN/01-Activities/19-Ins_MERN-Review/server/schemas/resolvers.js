const { Profile } = require('../models');

const resolvers = {
  // Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    // Important for Query Variables: Each query resolver function can accept up to four parameters.
    // The second parameter, commonly referred to as "args," represents the variable argument values passed with the query.
    // It is always an object, and in this case, we are destructuring that object to retrieve the profileId value.
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
  },
  // Important for useMutation: The resolver matches the typeDefs entry point and informs the request of the relevant data
  Mutation: {
    addProfile: async (parent, { name }) => {
      return Profile.create({ name });
    },
    addSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
