import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Show(props) {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const apiKey = "sk-3t2R642df04b75c19417";

  const getPlant = async () => {
    // https://perenual.com/api/species/details/1?key=sk-3t2R642df04b75c19417
    const details = `${props.detailsURL}${id}?key=${apiKey}`;

    const response = await fetch(details);
    const data = await response.json();
    console.log(data); // Add this line to see the response data
    setPlant(data);
  };

  useEffect(() => {
    getPlant();
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
            <p>Dimension: {plant.dimension}</p>
            <p>Watering: {plant.watering}</p>
            <p>
              Hardiness: {plant.hardiness.min}-{plant.hardiness.max}
            </p>
            <p>Sunlight: {plant.sunlight.join(", ")}</p>
            <p>Attracts: {plant.attracts.join(", ")}</p>
            <p>Propagation: {plant.propagation.join(", ")}</p>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Show;
