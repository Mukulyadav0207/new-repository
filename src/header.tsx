import Profile from "./Profile";
import SearchBar from "./searchBar";


function header(){
    return (
      <div className="flex items-center  bg-gray-200   ">
        <div>
          <SearchBar />
        </div>
        <div className="flex flex-grow justify-end mr-2 ">
          <Profile />
        </div>
      </div>
    );
}
 export default header;