import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/bmw.jpeg";
import "../assets/styles/navbar.css";
import Contact from "../pages/Contact";
import Mission from "../pages/Mission";

function Navbar() {
  const navigate = useNavigate();
  var hasToken = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_details");
    // Redirect to the login page or home page
    navigate("/");
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/dashboard">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/mission">
                Our Mission
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/login">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/register">
              Register
            </Link>
          </div> */}
          {hasToken && (
            <div>
              <button onClick={handleLogout} className="logout--btn">
                Log out
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
