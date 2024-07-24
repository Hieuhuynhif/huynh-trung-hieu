const sparseArrayRotation = (input = [], steps) => {
  const result = input;
  const length = result.length;

  for (let index = 0; index < steps; index++) {
    const element = result.pop();
    result.unshift(element);

    while (result[length - 1] == "None") {
      const element = result.pop();
      result.unshift(element);
    }
  }
  return result;
};

const input = [1, "None", 2, "None", 3];
const steps = 2;

console.log("-- run: sparseArrayRotation", input);
console.log("-- result:", sparseArrayRotation(input, steps));
