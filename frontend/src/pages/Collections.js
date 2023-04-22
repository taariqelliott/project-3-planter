import { Link } from "react-router-dom";
import { useState } from "react";

function Collections({ collection }) {
  const [toggle, setToggle] = useState(false);

  const handleDelete = (id) => {
    // array to include plants with different id's from the one provided in handleDelete
    const updatedCollection = collection.filter((plant) => plant.id !== id);
    localStorage.setItem("collection", JSON.stringify(updatedCollection));
    window.location.reload();
  };

  console.log(collection);
  return (
    <div>
      {localStorage.getItem("collection") &&
      JSON.parse(localStorage.getItem("collection")).length !== 0 ? (
        <button
          onClick={() => setToggle(!toggle)}
          className="collections-page-btn"
        >
          Delete a Plant
        </button>
      ) : (
        <div className="collections-cont-ifempty">
          <br></br>
          <h6>No plants in your collection quite yet...</h6>
          <img
            src={"https://planter123.s3.us-east-2.amazonaws.com/plant.jpg"}
            alt={""}
          />
        </div>
      )}
      <div className="grid-container">
        {collection.map((plant) => (
          <div className="plantContainer" key={plant.id}>
            {toggle && (
              <div>
                <button
                  className="collections-page-btn"
                  onClick={() => {
                    handleDelete(plant.id);
                    console.log("deleted plant with id:", plant.id);
                  }}
                >
                  delete
                </button>
              </div>
            )}
            <h3>{plant.common_name}</h3>
            <Link to={`/show/${plant.id}`} key={plant.id}>
              <img
                className="plant-image"
                src={
                  // render a placeholder image with a blur if there is no image from the api
                  plant.default_image && plant.default_image.small_url
                    ? plant.default_image.small_url
                    : "https://i.imgur.com/MqCdOKp.png"
                }
                style={
                  plant.default_image && plant.default_image.small_url
                    ? {}
                    : { filter: "blur(2px)", filter: "brightness(70%)" }
                }
                alt={plant.common_name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
