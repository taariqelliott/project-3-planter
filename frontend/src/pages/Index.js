import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import Blogs from "./Blogs";

function Index(props) {
  // create state to hold about data
  const [plants, setplant] = useState(null);

  // create function to make api call
  const getplant = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "plants");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setplant(data.data.data);
    console.log(data.data.data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getplant();
  }, []);

  // define a function that will return the JSX needed once we get the data

  const loaded = () => {
    return (
      <div>
        {plants &&
          plants.map((plant) => (
            <div key={plant.id} className="plantContainer">
              <Link to={`/show/${plant.id}`} key={plant.id}>
                <h1>{plant.common_name}</h1>
                <img src={plant.default_image.thumbnail} alt="" />
              </Link>
            </div>
          ))}
      </div>
    );
  };

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return plants ? loaded() : <h1>Loading...</h1>;
}

export default Index;
