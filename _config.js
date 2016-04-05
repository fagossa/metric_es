var config = {};

config.mongoURI = {
  development: process.env.MONGODB_ADDON_URI,
  test: 'mongodb://localhost/node-test'
};

module.exports = config;
