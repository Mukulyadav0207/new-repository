import Profile from "./Profile";
import SearchBar from "./searchBar";


function header(){
    return (
      <div className="flex  flex justify-center items-center space-x-96 bg-white  h-fit  ">
        <div>
          <SearchBar />
        </div>
        <div className=" ">
          <Profile />
        </div>
      </div>
    );
}
 export default header;