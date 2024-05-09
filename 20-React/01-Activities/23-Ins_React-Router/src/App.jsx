// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <h1>WELCOME TO THE APP</h1>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
