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
