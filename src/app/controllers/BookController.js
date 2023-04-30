const Book = require('../modals/Book');

class BookController {
  //[GET] /book
  index(req, res) {
    Book.find({})
      .then((course) => {
        res.json(course);
      })
      .catch((err) => {
        res.status(400).json({ err: err });
      });
  }

  //[GET] /book/id
  search(req, res) {
    Book.findOne({
      _id: req.params.id,
    })
      .then((course) => {
        res.json(course);
      })
      .catch((err) => {
        res.send('Error occurred');
      });
  }

  //[POST] /book
  create(req, res) {
    const newBook = new Book();
    newBook.title = req.body.title;
    newBook.auth = req.body.auth;
    newBook.category = req.body.category;

    newBook
      .save()
      .then((book) => {
        res.json(book);
      })
      .catch((err) => {
        res.status(400).json({ err: err });
      });
  }
  // [PUT] /book
  update(req, res) {
    Book.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: { title: req.body.title },
      },
      {
        update: true,
      },
    )
      .then((book) => {
        res.json(book);
      })
      .catch((err) => {
        res.status(204);
      });
  }

  // [DELETE] /book
  delete(req, res) {
    Book.findOneAndRemove({
      _id: req.params.id,
    })
      .then((book) => {
        res.json(book);
      })
      .catch((err) => {
        res.status(204);
      });
  }
}

module.exports = new BookController();
