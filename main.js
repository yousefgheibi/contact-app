const yargs = require("yargs");

const { addContact, listContacts, removeContact } = require("./contacts");
yargs.command({
  command: "create",
  aliases: ["c"],
  describe: "[create new contact]",
  builder: {
    fullname: {
      alias: "f",
      describe: "Person fullname",
      demandOption: true,
      type: "string",
    },
    phone: {
      alias: "p",
      describe: "Person phone Number",
      demandOption: true,
      type: "number",
    },
    email: {
      alias: "e",
      describe: "Person email Address",
      demandOption: true,
      type: "string",
    },
  },

  handler({ fullname, phone, email }) {
    //   console.log(fullname,phone,email);
    addContact(fullname, phone, email);
  },
});

yargs.command({
  command: "list",
  aliases: ["l"],
  describe: "[listing the saved contacts]",
  handler() {
    listContacts();
  },
});

yargs.command({
  command: "remove",
  aliases: ["r"],
  describe: "[remove contact]",
  builder: {
    fullname: {
      alias: "f",
      describe: "Person fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler({ fullname }) {
    removeContact(fullname);
  },
});

yargs.parse();

// console.log(yargs.argv);
