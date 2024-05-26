import { createContext, useContext, useReducer } from 'react';

// Import our reducer
import { reducer } from './reducers';

// Create our theme context using createContext()
export const ThemeContext = createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const useTheme = () => useContext(ThemeContext);

// Creating our theme provider. Accepts an argument of "props"
export default function ThemeProvider(props) {
  const darkTheme = false;

    // Set up our useReducer hook. Accepts two arguments - the reducer and an initial state
    const [state, dispatch] = useReducer(reducer, { darkTheme });

  return <ThemeContext.Provider value={[state, dispatch]} {...props} />;
}
