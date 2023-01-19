const express = require("express");
const router = express.Router();

const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact-controllers");

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).patch(updateContact).delete(deleteContact);

module.exports = router;
