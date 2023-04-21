import "./App.css";
import { useEffect, useState } from "react";

// Import Components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Profile from "./components/UserProfile";

function App() {
  const [showNavFooter, setShowNavFooter] = useState(true);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/" || currentPath === "") {
      setShowNavFooter(false);
    } else {
      setShowNavFooter(true);
    }
  }, []);

  return (
    <div className="container">
      {showNavFooter && <Navbar element={<Profile />} />}
      <Main />
      {showNavFooter && <Footer />}
    </div>
  );
}

export default App;
