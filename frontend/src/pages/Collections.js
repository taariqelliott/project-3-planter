import { Link } from "react-router-dom";
import { useState} from "react";

function Collections ({collection}) {

  const [toggle, setToggle] = useState(false)

  const handleDelete = (id) => {
    // array to include plants with different id's from the one provided in handleDelete
    const updatedCollection = collection.filter(plant => plant.id !== id)
    localStorage.setItem('collection', JSON.stringify(updatedCollection))
    window.location.reload()
  }

console.log(collection)
    return (
      <div>
        <h1>Collections Page</h1>
        {localStorage.getItem("collection") && JSON.parse(localStorage.getItem("collection")).length !== 0 ? (
            <button 
              onClick={() => setToggle(!toggle)}
              className="collections-page-btn">
              Delete a Plant
            </button>
            ):(
              <div className="collections-cont-ifempty">
                <br></br><h2>No plants in your collection quite yet...</h2>
                <img src={"https://planter123.s3.us-east-2.amazonaws.com/plant.jpg"} alt={""}/>
              </div>
            )}
              <div className="grid-container">
                {collection.map(plant => (
                  <div className="plantContainer" key={plant.id}>
                    {toggle && (
                      <div>
                        <button className="collections-page-btn" onClick={() => {
                          handleDelete(plant.id); 
                          console.log("deleted plant with id:", plant.id)}}>delete</button>
                      </div>
                    )}
                      <h3>{plant.common_name}</h3>
                        <Link to={`/show/${plant.id}`} key={plant.id}>
                          <img src={plant.default_image.small_url} alt={""} />
                        </Link>
                  </div>
                ))}
              </div>
      </div>
    )
}
  
export default Collections;
  