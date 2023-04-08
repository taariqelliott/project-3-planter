
import { Link } from "react-router-dom";

import Blogs from "./Blogs";

function Index(props) {


  // define a function that will return the JSX needed once we get the data

  const loaded = () => {


    return (
      <div className="flex-box">
        {props.plants &&
          props.plants.map((plant) => (
            <div key={plant.id} className="plantContainer">
              <Link to={`/show/${plant.id}`} key={plant.id}>
                <img src={plant.default_image.thumbnail} alt="" />
                <h1>{plant.common_name}</h1>
              </Link>
            </div>
          ))}
         <Blogs blogs={props.blogs} />
      </div>
    );
    

  };

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return props.plants ? loaded() : <h1>Loading...</h1>;
}

export default Index;
