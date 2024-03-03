const asyncHandler = require("express-async-handler");
const contact = require("../models/contactModel");

//@desc get all contacts
// route GET/api/contacts
// access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await contact.find();
  res.status(200).json(contacts);
});

//@desc create all contacts
// route POST/api/contacts
// access public
const createContact = asyncHandler(async (req, res) => {
  console.log("This is the body:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create contact" });
});

//@desc get contact
// route GET/api/contact/:id
//acess public
const getContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Getting contact for ${req.params.id}` });
});

//@desc put contact
// route PUT/api/contact/:id
//acess public
const updateContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Update contact for ${req.params.id}` });
});

//@desc delete contact
// route DELETE/api/contact/:id
//acess public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleting contact for ${req.params.id}` });
});




module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
