import { useEffect, useState } from "react";
const { API_KEY } = process.env


const SearchBar = (props) => {
    const API_PLANTS = `https://perenual.com/api/species-list?page=1&key=sk-3t2R642df04b75c19417&q=`
    const [query, setQuery] = useState({
    slug: "",
    results: [],
    })

    useEffect(() => {
        if (query.slug !== "") {
            const timeoutId = setTimeout(() => {
                const fetchData = async () => {
                    // console.log(API_PLANTS.get(`${query.slug}`))
                    try {
                        const res = await fetch(`${API_PLANTS}${query.slug}`)
                        const data = await res.json();
                      setQuery({ ...query, results: res.query });
                      console.log(query.slug);
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
        <div>
  
      <input
        type="search"
        placeholder="Search"
        value={query.slug}
        onChange={(e) => setQuery({ ...query, slug: e.target.value })}
      />
      <br />

    </div>
    
        )
}

export default SearchBar;