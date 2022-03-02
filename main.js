// console.log(process.argv[1]);

const command = process.argv[2];

switch (command) {
  case "add":
    console.log("Adding ... ");
    break;
  case "remove":
    console.log("Removeing ... ");
    break;
  default:
    console.log("Command not valid!");
}
