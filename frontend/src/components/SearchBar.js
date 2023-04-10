import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const SearchBar = (props) => {
    const API_PLANTS = `https://perenual.com/api/species-list?page=1&key=sk-WOd7643350463b93a473&q=`
    const [query, setQuery] = useState({
    slug: "", //the search term
    results: [], // Api's response
    })

    useEffect(() => {
        if (query.slug !== "") {
            const timeoutId = setTimeout(() => {
                const fetchData = async () => {
                    try {
                        const res = await fetch(`${API_PLANTS}${query.slug}`)
                        const outputData = await res.json();
                      setQuery({ ...query, results: outputData.data });
                      console.log("outputdata.data", outputData);
                    } catch (err) {
                        console.error(err)
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
                onChange={(e) => setQuery({ ...query, slug: e.target.value })}/>
                  <ul>
                      {query.results.map((plant) => (
                        <Link to={`/show/${plant.id}`} key={plant.id}>
                        <li key={plant.id}>{plant.common_name}</li>
                        </Link>
                        ))}
                  </ul>
            </div>  
          )
}

export default SearchBar;