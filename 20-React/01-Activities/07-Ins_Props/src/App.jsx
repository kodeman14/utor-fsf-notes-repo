// First we import our Access component from the components folder
import Access from "./components/Access";

const uName = "Mac"; //from api

function App() {
  return <Access isAccess={false} uName={uName} />;
}

export default App;
