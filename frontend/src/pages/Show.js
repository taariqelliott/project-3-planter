import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PlantDetails from "../components/PlantDetails";

function Show({ collection, setCollection, detailsURL }) {
  const { id } = useParams();
  const [plant, setDetails] = useState(null);
  const [addButtonVisible, setAddButtonVisible] = useState(true);
  const { isAuthenticated } = useAuth0();

  const API_KEY = process.env.REACT_APP_API_KEY
  // const apiKey2 = "sk-ynpn642f11225c738446";

  const getDetails = async () => {
    const details = `${detailsURL}${id}?key=${API_KEY}`;

    const response = await fetch(details);
    const data = await response.json();
    console.log("show page data", data); // Add this line to see the response data
    setDetails(data);
  };

  function checkCollection() {
    let convertedId = parseInt(id);
    if (collection.find((p) => p.id === convertedId)) {
      setAddButtonVisible(false);
    }
    console.log("validation", convertedId);
  }

  useEffect(() => {
    getDetails();
    checkCollection();
    // eslint-disable-next-line
  }, [id]);

  function addToCollection() {
    setCollection([...collection, plant]);
    setAddButtonVisible(false);
    console.log("addToCollection", collection);
  }

  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(collection));
  }, [collection]);

  console.log("show page stringify collection", collection);

  return (
    <div className="plant-details">
      {plant ? (
        <>
          <PlantDetails plant={plant} />
          {addButtonVisible && isAuthenticated && (
            <div className="show-page-div-button">
              <button className="show-page-btn" onClick={addToCollection}>
                Add to my collection
              </button>
            </div>
          )}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Show;
