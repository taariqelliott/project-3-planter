import React from "react";

function PlantDetails({ plant }) {
  return (
    <div>
      <img
        className="plant-image"
        src={plant.default_image.small_url}
        alt={plant.common_name}
      />
      <h1>{plant.common_name}</h1>
      <h2>
        <em>{plant.scientific_name}</em>
      </h2>

      <strong>{plant.description}</strong>

      <p>
        <strong>Type:</strong> {plant.type}
      </p>

      {plant.origin && plant.origin.length > 0 && (
        <p>
          <strong>Origin:</strong> {plant.origin.join(", ")}
        </p>
      )}

      <p>
        <strong>Growth Rate:</strong> {plant.growth_rate}
      </p>

      <p>
        <strong>Dimension:</strong> {plant.dimension}
      </p>

      <p>
        <strong>Cycle:</strong> {plant.cycle}
      </p>

      <p>
        <strong>Watering:</strong> {plant.watering}
      </p>

      <p>
        <strong>Hardiness:</strong>{" "}
        {plant.hardiness && `${plant.hardiness.min}-${plant.hardiness.max}`}
      </p>

      {plant.sunlight && plant.sunlight.length > 0 && (
        <p>
          <strong>Sunlight:</strong> {plant.sunlight.join(", ")}
        </p>
      )}

      {plant.soil && plant.soil.length > 0 && (
        <p>
          <strong>Soil:</strong> {plant.soil.join(", ")}
        </p>
      )}

      <p>
        <strong>Tropical:</strong> {plant.tropical ? "Yes" : "No"}
      </p>

      <p>
        <strong>Invasive:</strong> {plant.invasive ? "Yes" : "No"}
      </p>

      {plant.propagation && plant.propagation.length > 0 && (
        <p>
          <strong>Propagation:</strong> {plant.propagation.join(", ")}
        </p>
      )}

      {plant.maintenance && (
        <p>
          <strong>Maintenance:</strong> {plant.maintenance}
        </p>
      )}

      {plant.other_name && plant.other_name.length > 0 && (
        <p>
          <strong>Other Names:</strong> {plant.other_name.join(", ")}
        </p>
      )}

      {plant.family && (
        <p>
          <strong>Family:</strong> {plant.family}
        </p>
      )}
    </div>
  );
}

export default PlantDetails;
