const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookSchema = new Schema({
  title: String,
  auth: String,
  category: String,
  //   published: {
  //     type: Date,
  //     default: Date.now,
  //   },
  //   keywords: Array,
  //   published: Boolean,
  //   author: {
  //     type: ObjectId,
  //     ref: "User",
  //   },
  //   details: {
  //     modelNumber: Number,
  //     hardcover: Boolean,
  //     reviews: Number,
  //     rank: Number,
  //   },
});

module.exports = mongoose.model('Book', BookSchema);
