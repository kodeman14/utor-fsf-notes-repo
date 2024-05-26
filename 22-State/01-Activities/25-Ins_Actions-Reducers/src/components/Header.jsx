import { useAccountContext } from "../utils/GlobalState";

const Header = () => {
  const [state] = useAccountContext();

  // props.nameState
  return (
    <header className="App-header">
      {state.user.isLoggedIn ? (
        <h1 className="App-header">Welcome {state.user.userName}!</h1>
      ) : (
        <h1>Welcome! Please log in!</h1>
      )}
    </header>
  );
};

export default Header;
