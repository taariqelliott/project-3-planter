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
        {/* <Link to="/plants">
          <div>Home</div>
        </Link> */}
        <a href="/">Home</a>
        <a href="/plants">All Plants</a>
        <a href="/mycollection">My Collection</a>
        <a href="/new">Create Blog</a>
        <a href="/new">Sign in</a>

        {/* <Link to="/mycollection">
          <div>My Collections</div>
        </Link> */}
{/* 
        <Link to="/new">
          <div>Blog</div>
        </Link>

        <Link to="/#">
          <div>Sign in</div>
        </Link> */}

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
