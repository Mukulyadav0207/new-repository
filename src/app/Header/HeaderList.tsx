import Profile from "./Profile";
import SearchBar from "./SearchBar";

function header() {
  return (
    <div className="flex items-center h-10 bg-white position-relative drop-shadow-md justify-between ">
      <div>
        <SearchBar />
      </div>
      <div className="flex  mr-5 ">
        <Profile />
      </div>
    </div>
  );
}
export default header;
