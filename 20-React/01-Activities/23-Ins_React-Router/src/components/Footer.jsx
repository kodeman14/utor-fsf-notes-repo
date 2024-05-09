import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>BASIC FOOTER INFO</footer>
      <Link
        to="/Profile"
        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        className="btn btn-primary">
        Profile
      </Link>
    </>
  );
}

export default Footer;
