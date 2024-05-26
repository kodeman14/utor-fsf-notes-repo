import { createContext, useContext, useReducer } from "react";

// Import our reducer
import { reducer } from "./reducers";

// Create our theme context using createContext()
export const NameContext = createContext();
// const { Provider } = NameContext;

// Create a custom hook that allows easy access to our NameContext values
export const useName = () => useContext(NameContext);

// Creating our theme provider. Accepts an argument of "props"
export default function NameProvider({ children }) {
  const initialState = {
    name: "1337user",
    isValid: false,
  };

  // not in an object format
  // it means we can access the values directly
  // state.initialState.name => state.name
  // state.initialState.isValid => state.isValid
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NameContext.Provider value={[state, dispatch]}>
      {children}
    </NameContext.Provider>
  );
  // {...props} />;
}
