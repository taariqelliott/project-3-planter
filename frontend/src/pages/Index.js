import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Blogs from "./Blogs";
import SearchBar from "../components/SearchBar";
import PlantList from "../components/PlantList";


const Index = (props) => {
  
  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div className="flex-box">
        <SearchBar plants={props.plants}/>
          <div className="pagination">
            <button onClick={props.pageReducer} disabled={props.page === 1}> {" "}
              Prev{" "} </button>
            <button onClick={props.pageIncreament} > Next </button>
          </div>
            {props.plants.map((plant) => (
              <div key={plant.id} className="plantContainer">
                <Link to={`/show/${plant.id}`} key={plant.id}>
                  <img src={plant.default_image.thumbnail} alt="" />
                  <h1>{plant.common_name}</h1>
                </Link>
              </div>
              ))}
            <PlantList plants={plants} />
          <Blogs blogs={props.blogs} />
      </div>

    );
  };

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return props.plants ? loaded() : <h1>Loading...</h1>;
}

export default Index;
