import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlantDetails from "../components/PlantDetails";

function Show({collection, setCollection, detailsURL}) {
  const { id } = useParams();
  const [plant, setDetails] = useState(null);
  const apiKey = "sk-3t2R642df04b75c19417";
  // const apiKey2 = "sk-ynpn642f11225c738446";
  
  const getDetails = async () => {
    const details = `${detailsURL}${id}?key=${apiKey}`;
    
    const response = await fetch(details);
    const data = await response.json();
    console.log("show page data", data); // Add this line to see the response data
    setDetails(data);
  };
  
  useEffect(() => {
    getDetails();
    // eslint-disable-next-line
  }, [id]);

  function addToCollection() {

    setCollection([...collection, plant]);
  console.log("addToCollection", collection)
  }
  
  useEffect(() => {
    localStorage.setItem('collection', JSON.stringify(collection));
  }, [collection]);
  
  console.log("show page stringify collection", collection)

  return (
    <div className="plant-details">
      {plant ? (
        <>
          <PlantDetails plant={plant} />
          <div>
              <button className="show-page-btn" onClick={addToCollection}>Add to my collection</button>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Show;
