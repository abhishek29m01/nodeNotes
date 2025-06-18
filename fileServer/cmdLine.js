const input = process.argv;

if (input[2] == "factorial") {
  const num = input[3];
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log("Factorial:", fact);
} else if (input[2] == "addition") {
  console.log("Added:", parseInt(input[3]) + parseInt(input[4]));
} else {
  console.log("Invalid command");
}
