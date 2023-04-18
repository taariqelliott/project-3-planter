import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlantList = (props) => {
  const [page, setPage] = useState(1);
  const [plants, setPlants] = useState([]);
  // keep state from resetting when users change the page number
  const [indoor, setIndoor] = useState(false);

  const loadPlants = async () => {
    const response = await fetch(
      `https://perenual.com/api/species-list?page=${page}&key=sk-ynpn642f11225c738446${
        // if indoor is truthy, append "&indoor=1" to the end, else do nothing
        indoor ? "&indoor=1" : ""
      }`
    );
    const data = await response.json();
    setPlants(data.data);
  };

  useEffect(() => {
    loadPlants();
  }, [page, indoor]);

  const handleToggleIndoor = () => {
    setIndoor(!indoor);
    setPage(1);
  };

  return (
    <div className="plant-box card">
      <div className="toggle-container">
        <button onClick={handleToggleIndoor}>
          {indoor ? "Viewing Indoor Plants" : "Viewing Outdoor Plants"}
        </button>
      </div>

      <div className="pagination">
        <button
          className="prev-btn"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          {" "}
          &lt; Prev{" "}
        </button>
        <button className="next-btn" onClick={() => setPage(page + 1)}>
          {" "}
          Next &gt;{" "}
        </button>
      </div>

      <div className="grid-container">
        {plants ? (
          plants.map((plant) => (
            <div key={plant.id} className="plantContainer">
              <Link to={`/show/${plant.id}`} key={plant.id}>
                <img
                  className="plant-image"
                  src={
                    // render a placeholder image with a blur if there is no image from the api
                    plant.default_image && plant.default_image.thumbnail
                      ? plant.default_image.thumbnail
                      : "https://i.imgur.com/MqCdOKp.png"
                  }
                  style={
                    plant.default_image && plant.default_image.thumbnail
                      ? {}
                      : { filter: "blur(2px)", filter: "brightness(70%)" }
                  }
                  alt={plant.common_name}
                />

                <p>
                  <strong>
                    {plant.common_name
                      // capitalize each word
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </strong>
                </p>

                <p>
                  <em>{plant.scientific_name}</em>
                </p>
              </Link>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default PlantList;
