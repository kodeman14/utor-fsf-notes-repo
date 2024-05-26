import { useCar } from "../utils/CarContext";
import {
  REMOVE_CAR,
  START_CAR,
  STOP_CAR,
  UPDATE_ACCOUNT_STATUS,
} from "../utils/actions";
import AddCar from "./AddCar";

export default function CarComponent() {
  // const { cars } = useCar();
  // const stateCars = useCar();

  const [state, dispatch] = useCar();

  const startAction = (car) => ({
    type: START_CAR,
    payload: {
      id: car.id,
    },
  });

  const stopAction = (car) => ({
    type: STOP_CAR,
    payload: {
      id: car.id,
    },
  });

  const removeAction = (car) => ({
    type: REMOVE_CAR,
    payload: {
      id: car.id,
    },
  });

  return (
    <section className="car-list">
      <button
        onClick={() =>
          dispatch({
            type: UPDATE_ACCOUNT_STATUS,
          })
        }>
        {state.user.isLoggedIn ? "Log out" : "Log in"}
      </button>
      <br />
      {state.user.isLoggedIn && `Welcome, ${state.user.userName}`}
      {state.user.isLoggedIn ? <AddCar /> : "Log in to add car"}
      <hr />
      {state.cars.map((car) => (
        <div key={car.id} id={car.id} className="card mb-3">
          <h4 className="card-header bg-primary text-light p-2 m-0">
            {car.model} <br />
            <span style={{ fontSize: "1rem" }}>
              This car was manufactured in {car.year}
            </span>
          </h4>
          <div className="card-body bg-light p-2">
            <p>{car.make}</p>
          </div>
          <span style={{ fontSize: "1rem" }}>
            {car.isRunning ? "Car is running 🏎️" : "Car is off 💤"}
            <button
              id="turnOn"
              onClick={
                !car.isRunning
                  ? () => dispatch(startAction(car))
                  : () => dispatch(stopAction(car))
              }>
              Toggle Engine
            </button>
          </span>
          {state.user.isLoggedIn && (
            <button onClick={() => dispatch(removeAction(car))}>
              Remove Car
            </button>
          )}
        </div>
      ))}
    </section>
  );
}
