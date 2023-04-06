
import "./App.css";
import { Route, Routes } from "react-router-dom";


//Import pages
import Index from "./pages/Index";
import Show from "./pages/Show";

function App() {

  
  // const URL = "https://plantdatabase.herokuapp.com/";
  const URL = "https://perenual.com/api/species-list?page=1&key=sk-3t2R642df04b75c19417";

  return (
    <div className="flex-box">

     <Routes>
        <Route exact path="/index" element={<Index URL={URL}/>}/> 
        <Route exact path="/show/:id" element={<Show/>}/> 
        
      </Routes>
      
    </div>
  );
}

export default App;
