// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    // THIS IS THE RECOMMENDED APPROACH
    <header className="header">
      <h1>Home</h1>
    </header>
  );
}

export default Header;
