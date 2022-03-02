const fs = require("fs");

const persons = [
  { id: 1, fullname: "Yousef Gheibi" },
  { id: 2, fullname: "Ali Piri" },
  { id: 3, fullname: "Reza Hosseini" },
];

// fs.writeFile("contacts.json", JSON.stringify(persons) , (err)=>{
//     if(err) throw err;
//     console.log("Data Saved!")
// });

const data = fs.readFileSync("contacts.json");

const p = String(data);

console.log(JSON.parse(p));
console.log(typeof p);


//------------------------------------------------
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
