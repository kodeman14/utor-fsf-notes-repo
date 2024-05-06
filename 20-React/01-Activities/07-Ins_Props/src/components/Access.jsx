// First we import our Alert component from the components folder
import Alert from "./Alert";

// We then return Alert, we pass it a prop, "message" set to the value of our message variable
// We also pass a type prop to the component set to the value of "alertType"
function Access(props) {
  console.log("access props", props);
  // We create a couple variables which contain strings
  const message = props.isAccess ? "Welcome" : "Invalid user id or password";
  const alertType = props.isAccess ? "success" : "danger";
  return <Alert type={alertType} message={message} name={props.uName} />;
}

export default Access;
