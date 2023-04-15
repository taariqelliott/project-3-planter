import { Link } from "react-router-dom";
const SearchResult = (props) => {
  return (
    <div
      className="results-grid-container"
      style={{
        // hide the borders of the result box when there is no text input
        border: props.query.slug === "" ? "none" : "2px solid rgb(76, 151, 69)",
        boxShadow: props.query.slug === "" ? "none" : "0 2px 8px rgba(0, 0, 0, 0.25)",
        padding: props.query.slug === "" ? "0" : "1rem",
      }}>
      {props.query.slug !== "" &&
        props.query.results.map((plant) => (
          <div key={plant.id} className="resultContainer">
            <Link to={`/show/${plant.id}`} key={plant.id}>
              <img
                className="result-image"
                src={plant.default_image.thumbnail}
                alt="https://cdn-icons-png.flaticon.com/512/2675/2675389.png"
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
