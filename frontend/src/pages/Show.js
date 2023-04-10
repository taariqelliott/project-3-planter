import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Show(props) {
  const { id } = useParams();
  const [plant, setDetails] = useState(null);
  const apiKey = "sk-3t2R642df04b75c19417";
  const apiKey2 = "sk-WOd7643350463b93a473";

  const getDetails = async () => {
    // https://perenual.com/api/species/details/1?key=sk-3t2R642df04b75c19417
    const details = `${props.detailsURL}${id}?key=${apiKey2}`;

    const response = await fetch(details);
    const data = await response.json();
    console.log("show page data", data); // Add this line to see the response data
    setDetails(data);
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <div>
      {plant ? (
        <div>
          <div>
            <img src={plant.default_image.small_url} alt={plant.common_name} />
            <h1>{plant.common_name}</h1>
            <h2>
              <em>{plant.scientific_name}</em>
            </h2>
            {plant.other_name && (
              <p>
                <strong>Other Names:</strong> {plant.other_name.join(", ")}
              </p>
            )}
            {plant.family && (
              <p>
                <strong>Family:</strong> {plant.family}
              </p>
            )}
            {plant.origin && (
              <p>
                <strong>Origin:</strong> {plant.origin.join(", ")}
              </p>
            )}
            {plant.type && (
              <p>
                <strong>Type:</strong> {plant.type}
              </p>
            )}
            {plant.dimension && (
              <p>
                <strong>Dimension:</strong> {plant.dimension}
              </p>
            )}
            {plant.cycle && (
              <p>
                <strong>Cycle:</strong> {plant.cycle}
              </p>
            )}
            {plant.watering && (
              <p>
                <strong>Watering:</strong> {plant.watering}
              </p>
            )}
            {plant.growth_rate && (
              <p>
                <strong>Growth Rate:</strong> {plant.growth_rate}
              </p>
            )}
            {plant.hardiness && (
              <p>
                <strong>Hardiness:</strong> {plant.hardiness.min}-
                {plant.hardiness.max}
              </p>
            )}
            {plant.sunlight && (
              <p>
                <strong>Sunlight:</strong> {plant.sunlight.join(", ")}
              </p>
            )}
            {plant.soil.length > 0 && (
              <p>
                <strong>Soil:</strong> {plant.soil.join(", ")}
              </p>
            )}
            {plant.maintenance && (
              <p>
                <strong>Maintenance:</strong> {plant.maintenance}
              </p>
            )}
            {plant.care_level && (
              <p>
                <strong>Care Level:</strong> {plant.care_level}
              </p>
            )}
            {plant.tropical !== undefined && (
              <p>
                <strong>Tropical:</strong> {plant.tropical ? "Yes" : "No"}
              </p>
            )}
            {plant.invasive !== undefined && (
              <p>
                <strong>Invasive:</strong> {plant.invasive ? "Yes" : "No"}
              </p>
            )}
            {plant.description && (
              <p>
                <strong>Description:</strong> {plant.description}
              </p>
            )}
            {plant.propagation && (
              <p>
                <strong>Propagation:</strong> {plant.propagation.join(", ")}
              </p>
            )}
            {plant.default_image.license_name && (
              <p>
                <strong>Default Image License:</strong>{" "}
                {plant.default_image.license_name}
              </p>
            )}
          </div>
          <Link to={"/mycollections"} key={plant.id}>
            <button>Add to my collection</button>
          </Link>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Show;
