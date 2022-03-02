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

const saveContact = (contacts)=>{
    const data = JSON.stringify(contacts);
    fs.writeFileSync("contacts.json",data);
}

module.exports = {
  addContact,
};
