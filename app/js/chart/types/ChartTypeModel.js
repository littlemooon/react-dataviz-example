
module.exports = {
  // return a new model
  create: function(id, name) {
    return {
      _id: id,
      _name: name
    };
  },

  getId: function(c) {
    return c._id;
  },

  getName: function(c) {
    return c._name;
  },
};
