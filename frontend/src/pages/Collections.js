import React, { useEffect } from 'react';

function Collections ({collection, setCollection}) {

 
  console.log("collection in collection page", collection)
 
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('collection'));
    if(data){
      setCollection(data);
      console.log("collections useEffect", collection)
    }
  }, []);

    return (
      <div>
        <h1>Collections Page</h1>
        {collection.map(plant => (
        <div key={plant.id}>
          <h1>{plant.common_name}</h1>
          <img src={plant.default_image.medium_url} alt={plant.default_image.medium_url} />
        </div>

))}
      </div>
    )
    
  }
  
  export default Collections;
  