// import React from "react";
import Randomizer from "./Randomizer";

const name = "Mac";
const num1 = 1;
const num2 = 2;

function JSXVariables() {
  const lcName = name.toLowerCase();
  return (
    // <React.Fragment>
    <>
      <div className="main-container">
        <div className="container">
          <div className="p-5 mb-4 bg-light">
            {/* JavaScript expressions can be escaped inside of curly braces */}

            <h2>
              My cat&apos;s name is {name}, but it&apos;s `{lcName}` in
              lowercase. But you can call me...
            </h2>
            <h1>The JSX Boss!</h1>
            <Randomizer />

            <hr />
            <h2>I can do math: {num1 + num2 * 2}.</h2>
            <Randomizer />
            <h2>I can even reverse my name: {name.split("").reverse()}</h2>
          </div>
        </div>
      </div>
      <div>hello</div>
    </>
    // </React.Fragment>
  );
}

export default JSXVariables;
