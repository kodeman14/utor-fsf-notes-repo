function Login({ loggedIn, setLoggedIn }) {
  return (
    <div className="card text-center" style={{ width: 480 }}>
      <div className="card-body">
        <span role="img" aria-label="tada">
          🎉
        </span>
        <h5 className="card-title">You are signed in!</h5>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setLoggedIn(!loggedIn)}>
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default Login;
