// Fully JavaScript Terminal Calculator

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter first number: ", (num1) => {
  readline.question("Enter second number: ", (num2) => {
    readline.question("Choose operation (+, -, *, /): ", (op) => {

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      let result;

      if (isNaN(num1) || isNaN(num2)) {
        result = "Error: Please enter valid numbers!";
      } else {
        switch (op) {
          case '+': result = num1 + num2; break;
          case '-': result = num1 - num2; break;
          case '*': result = num1 * num2; break;
          case '/': 
            result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero"; 
            break;
          default:
            result = "Error: Invalid operation!";
        }
      }

      console.log("Result:", result);
      readline.close();
    });
  });
});

