import Profile from "./Profile";
import SearchBar from "./SearchBar";

function header() {
  return (
    <div className="flex items-center h-10 bg-white position-relative drop-shadow-md ">
      <div>
        <SearchBar />
      </div>
      <div className="flex justify-end flex-grow mr-2 ">
        <Profile />
      </div>
    </div>
  );
}
export default header;
