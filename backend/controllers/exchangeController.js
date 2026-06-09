const ExchangeRequest = require("../models/ExchangeRequest");
const Book = require("../models/Book");

exports.createRequest = async (req, res) => {
  try {
    const { requestedBookId, offeredBookId } = req.body;

    const requestedBook = await Book.findById(requestedBookId);
    const offeredBook = await Book.findById(offeredBookId);

    if (!requestedBook) {
      return res.status(404).json({
        message: "Requested book not found"
      });
    }

    if (!offeredBook) {
      return res.status(404).json({
        message: "Offered book not found"
      });
    }

    // Cannot request your own book
    if (requestedBook.owner.toString() === req.user.id) {
      return res.status(400).json({
        message: "You cannot request your own book"
      });
    }

    // Must own the offered book
    if (offeredBook.owner.toString() !== req.user.id) {
      return res.status(400).json({
        message: "You can only offer your own books"
      });
    }

    const request = await ExchangeRequest.create({
      requester: req.user.id,
      owner: requestedBook.owner,
      requestedBook: requestedBookId,
      offeredBook: offeredBookId
    });

    res.status(201).json({
      message: "Exchange request sent",
      request
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

exports.getIncomingRequests = async (req, res) => {
  try {

    const requests = await ExchangeRequest.find({
      owner: req.user.id
    })
    .populate("requester", "name email")
    .populate("requestedBook", "title author")
    .populate("offeredBook", "title author");

    res.status(200).json(requests);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};
// exports.getIncomingRequests = async (req, res) => {
//   try {

//     console.log("Logged in user:", req.user.id);

   
//     const requests = await ExchangeRequest.find({
//   owner: req.user.id
// });

// console.log("Logged in user:", req.user.id);
// console.log("Requests:", requests);
// }
// catch (err) {
//     res.status(500).json({
//       message: err.message
//     });
//   }
// };

//Accepting request
exports.acceptRequest = async (req, res) => {
  try {

    const request = await ExchangeRequest.findById(
      req.params.id
    );

    if (!request) {
      return res.status(404).json({
        message: "Request not found"
      });
    }

    request.status = "accepted";

    await request.save();

    res.status(200).json({
      message: "Request accepted",
      request
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

//Rejecting req

exports.rejectRequest = async (req, res) => {
  try {

    const request = await ExchangeRequest.findById(
      req.params.id
    );

    if (!request) {
      return res.status(404).json({
        message: "Request not found"
      });
    }

    request.status = "rejected";

    await request.save();

    res.status(200).json({
      message: "Request rejected",
      request
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};