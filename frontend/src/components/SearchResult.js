import { Link } from "react-router-dom";
const SearchResult = (props) => {
  return (
    <div
      className="results-grid-container"
      style={{
        // hide the borders of the result box when there is no text input
        border: props.query.slug === "" ? "none" : "2px solid rgb(76, 151, 69)",
      }}
    >
      {props.query.slug !== "" &&
        props.query.results.map((plant) => (
          <div key={plant.id} className="resultContainer">
            <Link to={`/show/${plant.id}`} key={plant.id}>
              <img
                className="result-image"
                src={plant.default_image.thumbnail}
                alt=""
              />
              <em>{plant.scientific_name}</em> / {plant.common_name}
              <p>
                A {plant.cycle.toLowerCase()} plant with{" "}
                {plant.watering.toLowerCase()} watering. It thrives in{" "}
                {Array.isArray(plant.sunlight)
                  ? plant.sunlight.join(", ").toLowerCase()
                  : plant.sunlight.toLowerCase()}
                .
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default SearchResult;
