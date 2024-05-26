import { useEffect } from "react";
import "./App.css";
import ThemeComponent from "./components/ThemeComponent";
// Importing our theme provider which will make our global state available to child components
import ThemeProvider from "./utils/ThemeContext";
import AnotherComponent from "./components/AnotherComponent";

export default function App() {
  useEffect(() => {
    document.title = "Module 22.1: Consumers";
  }, []);

  return (
    // parent (provider)
    <>
      <ThemeProvider>
        {/* child (consumer) */}
        <ThemeComponent />
        <AnotherComponent />
      </ThemeProvider>
    </>
  );
}
