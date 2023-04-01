const newRoute = require('./news');

function route(app) {
  app.use('/news',
  newRoute);
}

module.exports = route;
