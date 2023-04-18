import { Link } from "react-router-dom";

const SearchResult = (props) => {
  return (
    <div
      className="results-grid-container"
      style={{
        // hide the borders of the result box when there is no text input
        border: props.query.slug === "" ? "none" : "2px solid rgb(76, 151, 69)",
        boxShadow:
          props.query.slug === "" ? "none" : "0 2px 8px rgba(0, 0, 0, 0.25)",
        padding: props.query.slug === "" ? "0" : "1rem",
      }}
    >
      {props.query.slug !== "" &&
        props.query.results.map((plant) => (
          <div key={plant.id} className="resultContainer">
            <Link to={`/show/${plant.id}`} key={plant.id}>
              <img
                className="result-image"
                src={
                  // render a placeholder image with a blur if there is no image from the api
                  plant.default_image && plant.default_image.thumbnail
                    ? plant.default_image.thumbnail
                    : "https://i.imgur.com/MqCdOKp.png"
                }
                style={
                  // default_image is sometimes null so it needs to be checked first
                  plant.default_image && plant.default_image.thumbnail
                    ? {}
                    : {
                        filter: "blur(2px)",
                        filter: "brightness(70%)",
                      }
                }
                alt={plant.common_name}
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
