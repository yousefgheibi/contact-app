const yargs = require("yargs");

const { addContact } = require("./contacts");
yargs.command({
  command: "create",
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
    }
  },

  handler({fullname, phone, email}) {
    //   console.log(fullname,phone,email);
    addContact(fullname, phone, email);
  }
});

yargs.parse();

// console.log(yargs.argv);