const { School, Class, Professor } = require("../models");

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate("classes").populate({
        path: "classes",
        populate: "professor",
      });
    },
    classes: async () => {
      return await Class.find({}).populate("professor");
    },
    class: async (parent, args) => {
      console.log(args.name || args.building);
      return await Class.findOne({
        name: args.name,
        building: args.building,
      }).populate("professor");
    },
    professors: async () => {
      return await Professor.find({}).populate("classes");
    },
  },
};

module.exports = resolvers;
