// const Course = require("../modals/Course");
// const Education = require("../modals/Education");
const Book = require('../modals/Book');
// const BlogPost = require("../modals/BlogPost");

class SideController {
  // [GET] / home
  index(req, res) {
    Book.find({})
      .then((course) => {
        res.json(course);
      })
      .catch((err) => {
        res.status(400).json({ err: err });
      });
  }

  // [GET] / search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SideController();
