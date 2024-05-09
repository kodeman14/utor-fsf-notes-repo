// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.
function Alert({ type = "info", message, name }) {
  console.log("alert props", type, message);
  // console.log(type || "success");

  return (
    <div className={`alert alert-${type || "warning"}`} role="alert">
      {message} {type === "success" ? ` for ${name}!` : ""}
      {/* {message} {type === "success" && ` for ${name}!`} */}
    </div>
  );
}

// if (message) return message else return ''
// {message ? message : null}

export default Alert;
