import { Link } from "react-router-dom";

function Collections ({collection}) {

console.log(collection)
    return (
      <div>
        <h1>Collections Page</h1>
       
        {collection.map(plant => (
          <div className="grid-container" key={plant.id}>
             <button onClick={localStorage.removeItem(plant.id)}>delete</button>
            <h1>{plant.common_name}</h1>
            <Link to={`/show/${plant.id}`} key={plant.id}>
            <img src={plant.default_image.small_url} alt={plant.default_image.medium_url} />
          </Link>
          </div>
          ))}
      </div>
    )
}
  
export default Collections;
  