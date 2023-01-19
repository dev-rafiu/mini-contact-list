const Contact = require("../models/Contact");

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json({ nHits: contacts.length, data: contacts });
  } catch (error) {
    console.log(error);
  }
};

const getContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contactToDelete = await Contact.find({ _id: id });
    if (!contactToDelete) {
      return res
        .status(404)
        .json({ success: "error", msg: `no contact with id ${id}` });
    }
    res.status(200).json({ msg: `contact with id ${id} deleted` });
  } catch (error) {
    console.log(error);
  }
};

const createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(200).json({ success: true, data: newContact });
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contactToEdit = await Contact.findOneAndUpdate({ _id: id }, req.body);
    if (!contactToEdit) {
      return res
        .status(404)
        .json({ success: "error", msg: `no contact with id ${id}` });
    }
    res.status(200).json({ msg: `contact updated`, data: contactToEdit });
  } catch (error) {
    console.log(error);
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contactToDelete = await Contact.findOneAndDelete({ _id: id });
    if (!contactToDelete) {
      return res
        .status(404)
        .json({ success: "error", msg: `no contact with id ${id}` });
    }
    res.status(200).json({ msg: `contact with id ${id} deleted` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
