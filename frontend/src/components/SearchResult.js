import { Link } from "react-router-dom";
const SearchResult = (props) => {
  return (
    <div className="flex-box">
    {props.query.slug !== "" && (
        props.query.results.map((plant) => (
        <div key={plant.id} className="plantContainer">
          <Link to={`/show/${plant.id}`} key={plant.id}>
          <img
            className="plant-image"
            src={plant.default_image.thumbnail}
            alt=""
          />
            <h3 key={plant.id}>{plant.common_name}</h3>
          </Link>
        </div>
        ))
    )}
  </div>
  );
};

export default SearchResult;
