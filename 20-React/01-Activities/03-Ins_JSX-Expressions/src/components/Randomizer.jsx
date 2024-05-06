function Randomizer() {
  return (
    <h2>
      I can generate random numbers randomly:
      {Math.floor(Math.random() * 10) + 1},{Math.floor(Math.random() * 10) + 1},
      {Math.floor(Math.random() * 10) + 1}.
    </h2>
  );
}

export default Randomizer;
