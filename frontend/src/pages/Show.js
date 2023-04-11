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
            <p>Type: {plant.type}</p>
            <p>{plant.dimension}</p>
            <p>
              Hardiness: {plant.hardiness.min}-{plant.hardiness.max}
            </p>
            <p>Watering: {plant.watering}</p>
            <p>Sunlight: {plant.sunlight.join(", ")}</p>
            <p>Propagation: {plant.propagation.join(", ")}</p>
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
