import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { /* Todo: Import the required assets from 'react-router-dom' */ } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
            {/* TODO: Add code here that creates a allows for displaying the home page or single thought's comments */}
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
