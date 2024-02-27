const pie = "apple";
const myFruit = "tomato";

const predictable = () => 1;

const random = (num) => {
  if (typeof num === "number") return Math.random() * num;

  return "N/A";
};

const checkEq = (arg1, arg2) => {
  if (arg1 === arg2) return "strictly";
  else if (arg1 == arg2) return "partially";

  return "not equal";
};

// module.exports is an object we use to store variables or methods (these can be used by external/other js files)
module.exports = {
  pie: pie,
  fruit: myFruit,
  predictable: () => 1,
  random,
  checkEq,
};
