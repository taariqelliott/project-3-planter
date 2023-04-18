import React from "react";
import "../pages/show.css";

function PlantDetails({ plant }) {
  return (
    <div className="show-container">
      <div className="image-box">
        <img
          className="show-img"
          src={
            // render a placeholder image with a blur if there is no image from the api
            plant.default_image && plant.default_image.regular_url
              ? plant.default_image.regular_url
              : "https://i.imgur.com/MqCdOKp.png"
          }
          style={
            plant.default_image && plant.default_image.regular_url
              ? {}
              : {
                  filter: "blur(2px)",
                  filter: "brightness(70%)",
                  size: "437px 437px",
                }
          }
          alt={plant.common_name}
        />
      </div>
      <div className="show-content">
        <h1>{plant.common_name}</h1>
        <h2>
          <em>{plant.scientific_name}</em>
        </h2>

        {plant.description}

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
    </div>
  );
}

export default PlantDetails;
