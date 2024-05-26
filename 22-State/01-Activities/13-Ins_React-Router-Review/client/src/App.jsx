import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// Bring in the Outlet component which will render the proper pages conditionally on the browser's URL
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  // All the elements in this return statement will render regardless of the URL
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          {/* The Outlet component will be replaced by the proper page based on the URL */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
