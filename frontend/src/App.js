
import "./App.css";
import { Route, Routes } from "react-router-dom";


//Import pages
import Index from "./pages/Index";

function App() {

  const URL = "https://plantdatabase.herokuapp.com/";

  return (
    <div className="flex-box">

     <Routes>
        <Route exact path="/index" element={<Index URL={URL}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
