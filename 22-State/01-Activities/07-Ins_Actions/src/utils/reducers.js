import {
  ADD_CAR,
  REMOVE_CAR,
  START_CAR,
  STOP_CAR,
  UPDATE_ACCOUNT_NAME,
  UPDATE_ACCOUNT_STATUS,
} from "../utils/actions";
import createId from "./createId";

// this will be your impure function
// which will do your dirty work
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_CAR: {
      const newID = createId(state.cars);
      const newCar = { ...action.payload, id: newID };

      // what it would look like without reducer hook
      // setCars([...state.cars, newCar])

      // with reducer hook, we can just return the new state
      return {
        ...state,
        cars: [...state.cars, newCar],
      };
    }
    case REMOVE_CAR: {
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload.id),
      };
    }
    case START_CAR: {
      console.log("startCar", state, action);
      const carIndex = state.cars.findIndex(
        (car) => car.id === action.payload.id
      );
      const updatedCar = { ...state.cars[carIndex], isRunning: true };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    case STOP_CAR: {
      console.log("stopCar", state, action);
      const carIndex = state.cars.findIndex(
        (car) => car.id === action.payload.id
      );
      const updatedCar = {
        ...state.cars[carIndex],
        isRunning: false,
      };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    // not a complete example for find
    // case FIND_CAR: {
    //   return {
    //     ...state,
    //     cars: state.cars.filter((car) => car.id === action.payload.id),
    //   };
    // }
    case UPDATE_ACCOUNT_STATUS:
      console.log("UPDATE_ACCOUNT_STATUS dispatched", !state.user.isLoggedIn);
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: !state.user.isLoggedIn,
        },
      };
    case UPDATE_ACCOUNT_NAME:
      console.log("UPDATE_ACCOUNT_NAME dispatched");
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.userName,
        },
      };
    case 'PUSH_CARS_TO_DB':
      // whatever apollo connection to push to backend
      // your cars/user will be available through "state"
      break;
    default: {
      return state;
    }
  }
}
