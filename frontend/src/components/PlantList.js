import { Link } from "react-router-dom";

const PlantList = ({ plants }) => {
  return (
    <>
      {plants.map((plant) => (
        <div key={plant.id} className="plantContainer">
          <Link to={`/show/${plant.id}`} key={plant.id}>
            <img
              className="plant-image"
              src={plant.default_image.thumbnail}
              alt=""
            />
            <h3>{plant.common_name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PlantList;
