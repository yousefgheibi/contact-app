const fs = require("fs");

const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();
  const duplicateContact = contacts.find((c) => c.fullname === fullname);

  if (!duplicateContact) {
    contacts.push({ fullname, phone, email });
    console.log("Contact Saved.");
  } else {
    console.log("Contact already exist.");
  }
};

const loadContacts = () => {
  try {
    const dataBuffer = fs.readFileSync("contacts.json");
    const contacts = dataBuffer.toString();
    return JSON.parse(contacts);
  } catch (ex) {
    console.log(ex);
    return [];
  }
};


module.exports = {
  addContact,
};
