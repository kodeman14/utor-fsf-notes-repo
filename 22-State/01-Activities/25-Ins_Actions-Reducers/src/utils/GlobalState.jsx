import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";

const AccountContext = createContext();
const { Provider } = AccountContext;

const AccountProvider = ({ value = [], ...props }) => {
  const user = {
    isLoggedIn: false,
    userName: "admin",
  };
  const [state, dispatch] = useReducer(reducer, { user });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useAccountContext = () => useContext(AccountContext);

export { AccountProvider, useAccountContext };
