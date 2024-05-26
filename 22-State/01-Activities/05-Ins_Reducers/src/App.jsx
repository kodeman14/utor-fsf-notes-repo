import { useEffect } from "react";
import "./App.css";
import CarComponent from "./components/CarComponent";
// Importing our theme provider which will make our global state available to child components
import CarProvider from "./utils/CarContext";

export default function App() {
  useEffect(() => {
    document.title = "Module 22.1: Reducers";
  }, []);

  return (
    <CarProvider>
      <CarComponent />
    </CarProvider>
  );
}
