import ReactList from './ReactList';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Hello() {
  const heading = 'Things you can do with React:';

  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div>
      <h2>{heading}</h2>
            
      {/* Comments within the return statement must be wrapped in curly braces and syntactically resemble JS multi-line comments */}
      {/* When rendering a React child component, JSX syntax resembles that of HTML rather than function expression such as `ReactList()` */}
      <ReactList />
    </div>
  );
}

export default Hello;
