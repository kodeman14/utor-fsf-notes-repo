/* eslint-disable no-undef */
// render will be used from our testing library instead of react-dom while testing
import { render } from "@testing-library/react";
import Welcome from "../src/components/Welcome";

// It blocks describe the area of the application that we are testing
it("renders without a name and topic", () => {
  render(<Welcome />);

  const welcome = document.querySelector("h1");

  // expect statements allow us to assert the expected behavior
  expect(welcome.textContent).toBe("Hey there!");
});

// Here we are testing a Welcome component with a name and topic prop passed
it("renders with a name and topic", () => {
  // Arrange
  render(<Welcome name="Xander" topic="React" />);

  // Act
  const welcome = document.querySelector("h1");

  // Assert
  expect(welcome.textContent).toBe(
    "Welcome, Xander! We hope you learn a lot about React."
  );
});

it("renders with any name and topic", async () => {
  // Redundant test for a name and topic
  render(<Welcome name="Tammer" topic="Mocks" />);

  const welcome = document.querySelector("h1");

  expect(welcome.textContent).toBe(
    "Welcome, Tammer! We hope you learn a lot about Mocks."
  );
});

it("renders with a name and no topic", () => {
  // Tests the Welcome component where only a name prop is passed.
  // This will ensure that our fallback value was used
  render(<Welcome name="Grace" />);

  const welcome = document.querySelector("h1");

  expect(welcome.textContent).toBe(
    "Welcome, Grace! We hope you learn a lot about Web Development."
  );
});

it("renders with a topic and no name", () => {
  // Tests the Welcome component where only a topic prop is passed.
  // This will ensure that our infoPassed boolean renders the default component
  render(<Welcome topic="Node" />);

  const welcome = document.querySelector("h1");

  expect(welcome.textContent).toBe("Hey there!");
});
