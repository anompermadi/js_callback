const add = (number1, number2) => {
  return number1 + number2;
};

const multiply = (number1, number2) => {
  return number1 * number2;
};

const calculator = (numbe1, numbe2, operation, formatPrint) => {
  let result = operation(numbe1, numbe2);
  formatPrint(result);
};

const indo = (result) => {
  console.log(`Ini adalah hasilnya ${result}`);
};

const ing = (result) => {
  console.log(`This is the result ${result}`);
};

calculator(8, 9, multiply, indo);
calculator(8, 9, add, ing);
