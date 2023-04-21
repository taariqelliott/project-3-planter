import "./App.css";


//Import Components
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Profile from "./components/UserProfile"




function App() {

  return (
    <div className="container">
      <Navbar element={<Profile/>}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
