const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to print output
function print(x) {
  console.log(x);
}

// Async function to read a line of input
function readLine() {
  return new Promise(resolve => {
    rl.question('', resolve);
  });
}

// Async function to read an array of integers from a single line of input
async function readIntArray() {
  const line = await readLine();
  return line.split(' ').map(Number);
}

// Main function
async function main() {
  const t = parseInt(await readLine(), 10); // Read the number of test cases

  for (let i = 0; i < t; i++) {
    const n = parseInt(await readLine(), 10); // Read the input for each test case

    // Call a function to solve the problem and print the result
    const result = solve(n);
    print(result);
  }

  rl.close();
}

// Function to solve the problem
function solve(n) {
  // Your code logic goes here
  // Perform the required calculations or operations based on the input 'n'
  // Return the result
  return n;
}

// Call the main function to start the program
main().catch(console.error);
