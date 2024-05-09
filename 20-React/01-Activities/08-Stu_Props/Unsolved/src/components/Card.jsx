// TODO: Modify this function so that it accepts props from the parent component

// NOTE: alternate option with destructuring
// export default function Card({feline}) {

export default function Card(props) {
  const cardStyle = {
    width: "18rem",
  };

  // console.log("card props", props.feline);

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split(".")[0];
  };

  // TODO: Update the return statement to display the data we received as props
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placekitten.com/${randomWidth()}`}
          alt="Card cap"
        />
        {/* {console.log(props)} */}
        <div className="card-body">
          <h5 className="card-title">
            {/* Display the kitten's name here */}
            Name: {props.propName}
          </h5>
          <p className="card-text">
            {/* Display the kitten's description here */}
            Description: {props.propDescription}
          </p>
          <p className="card-text">
            {/* Display the kitten's id here */}
            ID: {props.propId}
          </p>
          <a href="#" className="btn btn-primary">
            {/* Display the kitten's name here */}
            Adopt {props.propName}
          </a>
        </div>
      </div>
    </div>
  );
}
