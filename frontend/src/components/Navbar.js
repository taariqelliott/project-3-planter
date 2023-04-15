import { Link } from "react-router-dom";
import { useRef} from "react"
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = (props) => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header className="item">
      <div className="logo-div"><h3>Logo</h3></div>
      <nav className="nav" ref={navRef}>
        <a href="/">Home</a>
        <a href="/plants">All Plants</a>
        <a href="/mycollections">My Collection</a>
        <a href="/new">Create Blog</a>
        <a href="/new">Sign in</a>

       
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
