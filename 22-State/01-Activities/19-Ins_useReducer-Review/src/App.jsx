import { useEffect } from 'react';
import NameComponent from './components/NameComponent';
import NameProvider from './utils/NameContext';
import './App.css'

export default function App() {
  useEffect(() => {
    document.title = 'Module 22: useReducer Review';
  }, []);

  return (
    <NameProvider>
      <NameComponent />
    </NameProvider>
  );
}
