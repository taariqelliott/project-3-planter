import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PlantList = (props) => {
  const [page, setPage] = useState(1);
  const [plants, setPlants] = useState([]);

  const loadPlants = async () => {
    const response = await fetch(

      `https://perenual.com/api/species-list?page=${page}&key=sk-9K4o6433387bc1b25472`

    );
    const data = await response.json();
    setPlants(data.data);
  };

  useEffect(() => {
    loadPlants();
  }, [page]);

  return (
    <div className="plant-box card">
      <div className="pagination">
        <button
          class="prev-btn"
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
                  src={plant.default_image.thumbnail}
                  alt={plant.common_name}
                />
                <p>
                  <strong>{plant.common_name}</strong>
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
