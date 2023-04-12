import Blogs from "./Blogs";
import SearchBar from "../components/SearchBar";
import PlantList from "../components/PlantList";

function Index({ blogs }) {
  return (
    <>
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className="index-container"
      >
        <PlantList />
        <Blogs blogs={blogs} />
      </div>
    </>
  );
}

export default Index;
