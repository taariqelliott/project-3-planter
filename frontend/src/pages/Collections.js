import React, { useState, useEffect } from 'react';

function Collections ({collection, setCollection}) {

 
 
  useEffect(() => {
    const collection = JSON.parse(localStorage.getItem('collection'));
    if(collection){
    setCollection(collection);
    console.log("collections useEffect", collection)
    }
  }, []);



    return (
      <div>
        <h1>Collections Page</h1>
        {collection.map(plant => (
        <div key={plant.id}>
          <h2>{plant.common_name}</h2>
          {/* <img src={plant.default_image.medium_url} alt={plant.default_image.medium_url} /> */}
        </div>
      ))}

      </div>
    )
    
  }
  
  export default Collections;
  