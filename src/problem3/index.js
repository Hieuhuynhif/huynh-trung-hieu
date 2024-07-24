const anagramGroups = (input = []) => {
  const group = {};
  input.forEach((str) => {
    const key = str.split("").sort().join("");
    if (!group[key]) group[key] = [str];
    else group[key].push(str);
  });

  const result = Object.values(group);

  return result;
};

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("-- run anagramGroups", input);
console.log("-- result: ", anagramGroups(input));
