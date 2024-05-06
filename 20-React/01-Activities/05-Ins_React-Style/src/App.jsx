import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* [...Array(10)].map */}
      {/* Array.from(Array(5) */}
      {[...Array(5)].map((e, i) => {
        return <Card key={i} data={e} />;
      })}
    </div>
  );
}

export default App;
