import ReactDOM from "react-dom/client";
// Import the required Provider component and createBrowserRouter helper function
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Import the pages the application should be able to display
import App from "./App.jsx";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// import DummyHome from "./pages/DummyHome";

// Define the router object which will control the Provider's ability to display certain pages to match the proper URLs
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <DummyHome />,
      // },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profiles/:profileId",
        element: <Profile />,
      },
    ],
  },
]);

// Render the Provider which will keep track of the application's location
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
