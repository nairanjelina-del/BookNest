const Book = require("../models/Book");

// ADD BOOK
exports.addBook = async (req, res) => {
  try {
    const { title, author, description } = req.body;

    const book = await Book.create({
      title,
      author,
      description,
      owner: req.user.id
    });

    res.status(201).json({
      message: "Book added successfully",
      book
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET ALL BOOKS
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate("owner", "name email");

    res.status(200).json(books);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};
//GET MY BOOKS
exports.getMyBooks = async (req, res) => {
  try {

    const books = await Book.find({
      owner: req.user.id
    });

    res.status(200).json(books);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};