import { useState, useEffect } from "react";

export default function Display() {
  const [count, setCount] = useState(0);
  const [isCleared, setIsCleared] = useState(false);

  // When the component mounts to the VDOM, run this callback
  useEffect(() => {
    const storedCount = localStorage.getItem("myCount");
    console.log("initial use effect on refresh/render");

    // If the value is found in storage, convert the string to a number and update state
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    console.log("localstorage use effect triggered");
    localStorage.setItem("myCount", count);
  });

  useEffect(() => {
    console.log("only triggered on isCleared state change", isCleared);
    // });
  }, [isCleared]);

  const handleIncrease = () => {
    setCount(count + 1);
    setIsCleared(false);
    console.log("in click me function");
  };

  const clearStorage = () => {
    localStorage.clear();
    setCount(0);
    setIsCleared(true);
    console.log("in clear count function");
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <code>check localStorage in developer console</code>
      <p>Data cleared?: {isCleared ? "true" : "false"}</p>
      <hr />
      <button type="button" onClick={handleIncrease}>
        Click Me
      </button>
      <button type="button" onClick={clearStorage}>
        Reset Count
      </button>
    </div>
  );
}
