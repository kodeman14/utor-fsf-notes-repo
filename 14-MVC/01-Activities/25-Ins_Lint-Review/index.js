// Error: variable is defined but never used
const example = true;

// Error: function is empty
const sayHello = () => {
  console.log(example);
};

// Error: strings should use single quotes
sayHello('hello');
