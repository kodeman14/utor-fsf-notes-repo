import { useState } from "react";
import { useCar } from "../utils/CarContext";
import { ADD_CAR } from "../utils/actions";

export default function AddCar() {
  const [newCar, setNewCar] = useState({ make: "", model: "", year: "" });
  const [, dispatch] = useCar();

  const addAction = () => ({
    type: ADD_CAR,
    payload: {
      make: newCar.make,
      model: newCar.model,
      year: newCar.year,
    },
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addAction());
  };

  const handleInputChange = (ev) => {
    // const { name, value } = ev.target;
    setNewCar({
      ...newCar,
      [ev.target.name]: ev.target.value,
    });
  };

  return (
    <section className="car-list">
      <form onSubmit={handleSubmit}>
        <input
          name={"make"}
          value={newCar.make}
          onChange={handleInputChange}
          placeholder="MAKE"
        />
        <input
          name={"model"}
          value={newCar.model}
          onChange={handleInputChange}
          placeholder="MODEL"
        />
        <input
          name={"year"}
          value={newCar.year}
          onChange={handleInputChange}
          placeholder="YEAR"
        />
        <button type="submit">ADD CAR</button>
      </form>
    </section>
  );
}
