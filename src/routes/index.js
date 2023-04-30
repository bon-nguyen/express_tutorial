const newsRoute = require('./news');
const sideRoute = require('./side');
const bookRoute = require('./book');

function route(app) {
  app.get('/news', newsRoute);

  // Book
  app.delete('/book/:id', bookRoute);
  app.put('/book/:id', bookRoute);
  app.post('/book', bookRoute);
  app.get('/book/:id', bookRoute);
  app.get('/book', bookRoute);

  // Home
  app.get('/', sideRoute);
}

module.exports = route;
