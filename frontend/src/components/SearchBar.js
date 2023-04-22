import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const API_PLANTS = `https://perenual.com/api/species-list?page=1&key=${API_KEY}&q=`;
  const [query, setQuery] = useState({
    slug: "", //the search term
    results: [], // Api's response
  });

  useEffect(() => {
    if (query.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`${API_PLANTS}${query.slug}`);
            const outputData = await res.json();
            setQuery({ ...query, results: outputData.data });
            console.log("search bar outputData", outputData);
          } catch (err) {
            console.error(err);
          }
        };
        fetchData();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [query.slug]);

  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search"
        value={query.slug}
        onChange={(e) => setQuery({ ...query, slug: e.target.value })}
      />
      {/* stop displaying a dropdown for empty input */}
      {query.slug !== "" && (
        <ul className="search-bar-dropdown">
          {query.results.map((plant) => (
            <Link to={`/show/${plant.id}`} key={plant.id}>
              <li key={plant.id}>{plant.common_name}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
