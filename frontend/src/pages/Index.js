import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Blogs from "./Blogs";
import SearchBar from "../components/SearchBar";

function Index({blogs}) {
  
  const [page, setPage] = useState(1);
  const [plants, setplants] = useState(null);
  
  const ALL_PLANTS_API = `https://perenual.com/api/species-list?page=${page}&key=sk-3t2R642df04b75c19417`

    // Function to get list of Plants
    const getplants = async () => {
      // make api call and get response
      const response = await fetch(ALL_PLANTS_API);
      // turn response into javascript object
      const data = await response.json();
      // set the about state to the data
      console.log("here is data:",data)
      setplants(data.data);
    };
  
    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => {
      getplants();
      // eslint-disable-next-line
    }, [page]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div className="flex-box">
        <SearchBar plants={plants}/>
          <div className="pagination">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}> Prev </button>
            <button onClick={() => setPage(page + 1)} > Next </button>
          </div>
            {plants.map((plant) => (
              <div key={plant.id} className="plantContainer">
                <Link to={`/show/${plant.id}`} key={plant.id}>
                  <img src={plant.default_image.thumbnail} alt="" />
                  <h1>{plant.common_name}</h1>
                </Link>
              </div>
              ))}
          <Blogs blogs={blogs} />
      </div>
    );
  };

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return plants ? loaded() : <h1>Loading...</h1>;
}

export default Index;
