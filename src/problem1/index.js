const fizzBuzz = (x, y) => {
  for (let number = 1; number <= 100; number++) {
    if (number % x == 0 && number % y == 0) console.log("FooBar");
    else if (number % x == 0) console.log("Foo");
    else if (number % y == 0) console.log("Bar");
    else console.log(number);
  }
};
const a = 3;
const b = 5;
console.log("-- run: fizzBuzz", a, b);
console.log("-- result:");
fizzBuzz(a, b);
