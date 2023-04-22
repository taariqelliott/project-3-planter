import { useRef} from "react"
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./UserProfile"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Navbar = (props) => {
  
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const handleLinkClick = (event) => {
    event.preventDefault();
  };


  return (
    <header className="item">
      <div className="logo-div"><a href="/"><img className="plantlogo" src="https://i.imgur.com/HqoLHeR.png" alt="" /></a></div>
      <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
      </button>
      
      <nav className="nav" ref={navRef}>

        <a href="/plants">All Plants</a>

          {isAuthenticated ? (
            <>
        <a href="/new">Create Blog</a>
        <a href="/mycollections" >My Collection</a>
        <a href="/logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</a>
          </>
          ):(
            <>
              <Popup trigger={
                <div >
                  <a href="/#" onClick={handleLinkClick}>Create Blog</a>
                  <a href="/#" onClick={handleLinkClick}>My Collection</a>
                </div>

              }modal nested>
                {close => (
                          <div className='popup-window'>
                            <button className="close" tabindex="0" onClick=
                              {() => close()}>
                                <FaTimes />
                            </button>
                              <h4 className="popup-header">Please login to proceed to the page</h4>
                                <div>
                                   <button className="login-in-popup" onClick={() => loginWithRedirect()}>Log in</button>
                                 </div>
                          </div>
                )}
              </Popup>

            <a href="/login" onClick={() => loginWithRedirect()}>Log in</a>
            </>
            )}

          <Profile/>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      
    </header>
  );
};

export default Navbar;
