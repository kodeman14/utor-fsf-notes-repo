import './App.css';
// Important for API Consumption: To enable interaction with our GraphQL API on the front end, we utilize these tools to develop the client-side behavior
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// Important for API Consumption: Create an instance of the ApolloClient class and specify the endpoint of your GraphQL API (e.g., 'http://localhost:3001')—the proxy set up in the previous activity facilitates this. 
// We also instantiate a new InMemoryCache class that automatically caches queried data, enhancing performance.
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Important for API Consumption: Wrap your component tree with the ApolloProvider component to enable access to the ApolloClient from anywhere within the application
    <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </div>
    </ApolloProvider>
  );
}

export default App;
