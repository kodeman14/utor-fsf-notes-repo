import { createContext, useContext } from "react";
import { useReducer } from "react";
import reducer from "./reducers";

export const CarContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCar = () => useContext(CarContext);

// this is your pure function that doesn't change values
// this will act as a passage between component and reducer
export default function CarProvider({ children }) {
  const cars = [
    {
      id: 1,
      make: "Honda",
      model: "Civic",
      year: "2008",
      isRunning: false,
    },
    {
      id: 2,
      make: "Tesla",
      model: "Y",
      year: "2021",
      isRunning: false,
    },
  ];

  const user = {
    isLoggedIn: false,
    userName: "admin",
  };

  const [state, dispatch] = useReducer(reducer, { cars, user });

  console.log("cars", state);

  setInterval(() => {
    dispatch({
      type: "PUSH_CARS_TO_DB",
    });
  }, 1000 * 60 * 5);

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    <CarContext.Provider value={[state, dispatch]}>
      {children}
    </CarContext.Provider>
  );
}
