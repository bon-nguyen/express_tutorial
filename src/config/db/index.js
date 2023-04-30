const mongoose = require('mongoose');

async function connect() {
  mongoose
    .connect('mongodb://127.0.0.1:27017/f8_education_dev')
    .then(() => console.log('Connected!'))
    .catch((e) => console.error(e));
}

module.exports = { connect };
