const express = require("express");
const router = express.Router();


const {createRequest,getIncomingRequests,  acceptRequest,rejectRequest} = require("../controllers/exchangeController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/request", authMiddleware, createRequest);
router.get("/incoming",authMiddleware,getIncomingRequests);
router.put("/accept/:id",authMiddleware,acceptRequest);
router.put( "/reject/:id",authMiddleware,rejectRequest);

module.exports = router;