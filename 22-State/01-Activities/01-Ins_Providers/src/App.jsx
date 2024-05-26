import UserProvider from './utils/UserContext';
import UserComponent from './components/UserComponent';
import './App.css';

export default function App() {
  return (
    <div>
      <UserProvider>
        {/* only "user" will get access to the context */}
        <UserComponent />
      {/* <OtherComponent /> */}
      </UserProvider>
      {/* "other" will not have access to user context */}
    </div>
  );
}
