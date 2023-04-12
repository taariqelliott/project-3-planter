
import Blogs from "./Blogs";
import PlantList from "../components/PlantList";
import SearchResult from "../components/SearchResult";

const Index = (props) => {

 
  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div className="">
        <div className="header-box">
          <div className="search-bar">
            <form onSubmit={props.handleSubmit}>
              <input
                type="search"
                placeholder="Search"
                onChange={props.querySet}
                value={props.query.slug}
              />
              <input type="submit" value="Submit" className="submit-btn" />
            </form>
          </div>
          <div className="pagination">
            <button
              className="serach-btn"
              onClick={props.pageReducer}
              disabled={props.page === 1}>
              &lt; Prev
            </button>
            <button className="serach-btn" onClick={props.pageIncreament}>
              Next &gt;
            </button>
          </div>
        </div>
        <div className="flex-box">
          <SearchResult query={props.query}/>
          <PlantList plants={props.plants} />
          <Blogs blogs={props.blogs} />
        </div>
      </div>
    );
  };

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return props.plants ? loaded() : <h1>Loading...</h1>;
}

export default Index;
