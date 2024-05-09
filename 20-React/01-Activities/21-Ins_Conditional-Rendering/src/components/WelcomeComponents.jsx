import Login from "./Login";

// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log("Welcome1 -> loggedIn", loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
      {loggedIn ? (
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      ) : (
        // If we are logged out, render this:
        <div className="card text-left" style={{ width: 480 }}>
          <div className="card-body">
            <span role="img" aria-label="stopsign">
              🛑
            </span>
            <h5 className="card-title">You are currently logged out</h5>
            <button
              className="btn btn-warning"
              type="button"
              onClick={() => setLoggedIn(!loggedIn)}>
              LOG IN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
