import { useState } from "react";
import "./style.css";

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const isFormFilled = firstName && lastName && email;

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === "firstName"
      ? setFirstName(value)
      : name === "lastName"
      ? setLastName(value)
      : setEmail(value);
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    clearForm();
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {firstName} {lastName}
        <hr />
        {/* {email ? `your email is ${email}` : ''} */}
        {email && `your email is ${email}`}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <button disabled={!isFormFilled} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
