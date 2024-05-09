function Greeting() {
  // welcomeStudent is a helper function which takes in a studentName parameter and uses it to alert a string
  const welcomeStudent = (studentName) => {
    alert(`Welcome, ${studentName}!`)
  }

  return (
    <div className="container text-center">
      <h2>Welcome the Students!</h2>
      <div className="list-group">
        {/* TODO: Resolve the issue so that the welcomeStudent function properly alerts the name of the selected student when the button is clicked. */}
        <button 
          onClick={welcomeStudent('Mary')} 
          className="list-group-item list-group-item-action"
        >
            Mary
        </button>
        <button 
          onClick={welcomeStudent('Cole')} 
          className="list-group-item list-group-item-action"
        >
            Cole
        </button>
        <button 
          onClick={welcomeStudent('Rebecca')} 
          className="list-group-item list-group-item-action"
        >
            Rebecca
        </button>
      </div>
    </div>
  );
}

export default Greeting;
