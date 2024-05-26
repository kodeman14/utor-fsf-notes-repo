import AccountDisplay from './components/AccountDisplay';
import Header from './components/Header';
import './App.css'
import { AccountProvider } from './utils/GlobalState';

function App() {
  return (
    <AccountProvider>
      <div className="App">
        <Header />
        <AccountDisplay />
      </div>
    </AccountProvider>
  );
}

export default App;
