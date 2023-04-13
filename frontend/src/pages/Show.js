import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PlantDetails from "../components/PlantDetails";

function Show({detailsURL}) {
  const { id } = useParams();
  const [plant, setDetails] = useState(null);
  // const apiKey = "sk-3t2R642df04b75c19417";
  const apiKey2 = "sk-ynpn642f11225c738446";

  const getDetails = async () => {
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
    <div className="plant-details">
      {plant ? (
        <>
          <PlantDetails plant={plant} />
          <div>
            <Link to={"/mycollections"} key={plant.id}>
              <button>Add to my collection</button>
            </Link>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Show;
