import { Link } from "react-router-dom";

function Collections ({collection}) {

  const handleDelete = (id) => {
    // array to include plants with different id's from the one provided in handleDelete
    const updatedCollection = collection.filter(plant => plant.id !== id)
    localStorage.setItem('collection', JSON.stringify(updatedCollection))
  }


console.log(collection)
    return (
      <div>
        <h1>Collections Page</h1>
       <div className="grid-container">
        {collection.map(plant => (
              <div className="plantContainer" key={plant.id}>
          
             <button onClick={() => {handleDelete(plant.id); console.log("deleted plant with id:", plant.id)}}>delete</button>
            <h3>{plant.common_name}</h3>
            <Link to={`/show/${plant.id}`} key={plant.id}>
            <img src={plant.default_image.small_url} alt={plant.default_image.medium_url} />
            
          </Link>
          </div>
          ))}
          </div>
      </div>
    )
}
  
export default Collections;
  