// We import our Greeting component from the components folder so that we can eventually return it
import Greeting from "./components/Greeting";

// App is our main component at the top level of our App that references other components
function App() {

  // welcomeClass is a helper function which will alert a string
  // The onClick callback function will automatically receive the event object just like classical DOM event listeners
  const welcomeClass = (event) => {
    console.log(event);
    alert('Welcome to event handling with React!');
  };

  // welcomeClass is being passed to the Greeting component as props
  return <Greeting clickHandler={welcomeClass} />;
  // return <Greeting clickHandler={(ev) => welcomeClass(ev)} />;
}

// Here we export the App component so that it can be made available in `main.jsx`
export default App;
