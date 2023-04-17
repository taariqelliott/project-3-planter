import Blogs from "./Blogs";
import PlantList from "../components/PlantList";
import SearchResult from "../components/SearchResult";
import Slider from "../components/Slider/Slider";

const Index = (props) => {
  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div className="main-container">
        <Slider />
        <div className="header-box">
          <div className="search-bar">
            <form onSubmit={props.handleSubmit}>
              <input
                type="search"
                placeholder="Plant Name"
                onChange={props.querySet}
                value={props.query.slug}
              />
              <input type="submit" value="Search" className="submit-btn" />
            </form>
          </div>
        </div>

        <SearchResult query={props.query} />
        <PlantList plants={props.plants} URL={props.URL} />
        <Blogs blogs={props.blogs} />
      </div>
    );
  };

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return props.plants ? loaded() : <h1>Loading...</h1>;
};

export default Index;
