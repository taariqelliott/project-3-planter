import Blogs from "./Blogs";
import SearchBar from "../components/SearchBar";
import PlantList from "../components/PlantList";

function Index({ blogs }) {
  return (
    <>
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="index-container">
        <PlantList />
        <Blogs blogs={blogs} />
      </div>
    </>
  );
}

export default Index;
