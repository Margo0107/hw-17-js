class Conculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiplay(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "You can't divide by zero.";
    }
    return a / b;
  }
}
const calc = new Conculator();

console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiplay(3, 6));
console.log(calc.divide(8, 2));
console.log(calc.divide(5, 0));
