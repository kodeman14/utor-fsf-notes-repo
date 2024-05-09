// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log("Welcome2 -> loggedIn", loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      {/* Conditional (ternary) operator is checking loggedIn */}
      <div
        className={`card text-${loggedIn ? "center" : "left"}`}
        style={{ width: 480 }}>
        <div className="card-body">
          <span role="img" aria-label={loggedIn ? "tada" : "stopsign"}>
            {loggedIn ? "🎉" : "🛑"}
          </span>
          <h5 className="card-title">
            {loggedIn ? "You are signed in!" : "You are currently logged out"}
          </h5>
          <button
            className={`btn btn-${loggedIn ? "success" : "warning"}`}
            type="button"
            onClick={() => setLoggedIn(!loggedIn)}>
            {loggedIn ? "LOG OUT" : "LOG IN"}
          </button>
        </div>
      </div>
    </div>
  );
}
