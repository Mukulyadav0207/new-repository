import React from "react";
import Sidebar from "./sideBar";
import Profile from "./Profile";
import SearchBar from "./searchBar";
const App: React.FC = () => {
  return (
    <div className ="bg-gray-100 w-fit ml-10">
      <div className="flex flex-row m-4">
        <div>
          <Sidebar />
        </div>
        <div className="flex gap-56 bg-indigo-200 h-fit  ">
          <div>
            <SearchBar />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
