import "./App.css";
import { Route, Routes } from "react-router-dom";

//Import pages
import Index from "./pages/Index";
import Show from "./pages/Show";

function App() {
  const URL = "https://plantdatabase.herokuapp.com/";
  const detailsURL = "https://perenual.com/api/species/details/";

  return (
    <div className="flex-box">
      <Routes>
        <Route exact path="/index" element={<Index URL={URL} />} />
        <Route
          exact
          path="/show/:id"
          element={<Show URL={URL} detailsURL={detailsURL} />}
        />
      </Routes>
    </div>
  );
}

export default App;
