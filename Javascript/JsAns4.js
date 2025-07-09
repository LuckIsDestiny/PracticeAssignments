const age = Number(prompt("Enter Age", 22));

if(age > 18) {
  console.log("Access to all movies");
} else if(age > 13) {
  console.log("Access to PG-13 and below");
} else {
  console.log("Access to kids' movies only");
}