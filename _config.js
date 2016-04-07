var config = {};

config.mongoURI = {
  development: process.env.MONGODB_ADDON_URI,
  test: 'mongodb://localhost/metric-test'
};

module.exports = config;
