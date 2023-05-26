const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages); // fetching messages for a particular chat
 router.route("/").post(protect, sendMessage);   // using protect so that the user must be logged in to use this function

module.exports = router;
