import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/plants">
        <div>Home</div>
      </Link>

      <Link to="/mycollection">
        <div>My Collections</div>
      </Link>

      <Link to="/new">
        <div>Create Blog</div>
      </Link>
    </nav>
  );
};

export default Header;
