// 1. Object
const nodejs = {
  name: "Node.js",
  type: "JavaScript runtime environment",
};

// TODO: Destructure the object 'nodejs'

// console.log(name); // <= Node.js
// console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: "JavaScript",
  type: "programming language",
  version: "ES6",
  tools: {
    frameworks: {
      framework1: "AngularJS",
      framework2: "Vue.js",
    },
    libraries: {
      library1: "jQuery",
      library2: "React",
    },
  },
};

// TODO: Destructure the nested object 'js'
const { name, type, version, tools } = js;
const { frameworks, libraries } = tools;
const { framework1: f1, framework2: f2 } = frameworks;
const { library1: f3, library2: f4 } = libraries;

// const { framework1, framework2 } = js.tools.frameworks;
// js.tools.frameworks, js.tools.frameworks

// const {
//   tools: {
//     frameworks: { framework1, framework2 },
//   },
// } = js;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ["HTML", "CSS", "JavaScript"];

// TODO: Destructure the array 'languages'

// console.log(markup, style, scripting); // <= HTML CSS JavaScript
// console.log(markup); // <= HTML