const fs = require("fs");

const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();
  const duplicateContact = contacts.find((c) => c.fullname === fullname);

  if (!duplicateContact) {
    contacts.push({ fullname, phone, email });
    saveContact(contacts);
    console.log("Contact Saved.");
  } else {
    console.log("Contact already exist.");
  }
};

const listContacts = () => {
  const contacts = loadContacts();
  if (contacts.length > 0) {
    console.log("Your contacts:\n");
    // console.table(contacts);
    contacts.forEach((contact) => {
      console.log(`\t"Fullname": ${contact.fullname}`);
      console.log(`\t"Phone": ${contact.phone}`);
      console.log(`\t"Email": ${contact.email}`);
      console.log("\t-------------------------");
    });
  } else {
    console.log("You don't have any contacts.");
  }
};

const removeContact = (fullname) => {
  const contacts = loadContacts();
  const filteredContacts = contacts.filter((c) => c.fullname !== fullname);

  if (contacts.length > filteredContacts.length) {
    saveContacts(filteredContacts);
    console.log(`${fullname} has been removed.`);
  } else {
    console.log("Contact not found.");
  }
};

const loadContacts = () => {
  try {
    const dataBuffer = fs.readFileSync("contacts.json");
    const contacts = dataBuffer.toString();
    return JSON.parse(contacts);
  } catch (ex) {
    // console.log(ex);
    return [];
  }
};

const saveContact = (contacts) => {
  const data = JSON.stringify(contacts);
  fs.writeFileSync("contacts.json", data);
};

module.exports = {
  addContact,
  listContacts,
  removeContact,
};
