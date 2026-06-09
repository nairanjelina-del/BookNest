const express = require("express");
const router = express.Router();

const { addBook,getAllBooks,getMyBooks } = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");

// protected route
router.post("/add", authMiddleware, addBook);
router.get("/", getAllBooks);
router.get("/my-books",authMiddleware,getMyBooks);
module.exports = router;