import { CgProfile } from "react-icons/cg";
import React,{useState} from "react";
import { FC, InputHTMLAttributes } from "react";
import {Link} from "react-router-dom";
import {IoMdSettings  } from "react-icons/io";
import { GoSignOut } from "react-icons/go";

const Profile =() => {
const [showProfile, setShowProfile] = useState(false);

const MyProfile =() => {
  return (
    <div
      onClick={() => setShowProfile(false)}
      className="  fixed  bg-white   rounded-md   "
    >
      <div className="  flex flex-col   gap-2  p-2">
        <Link to="/settings" className=" hover:text-red-200  ">
          <div className="flex flex items-center justify-center  gap-1">
            <div>
              <IoMdSettings />
            </div>
            <div>Settings</div>
          </div>
        </Link>
        <Link className=" hover:text-red-200" to="/sign out">
          <div className="flex flex justify-center items-center gap-1">
            <div>
              <GoSignOut />
            </div>
            <div>Sign out</div>
          </div>
        </Link>
      </div>
    </div>
  );
}









  return (
    <>
  
        <button onClick={() => setShowProfile(true)}>
          <CgProfile className=" " />
        </button>

      {showProfile && <MyProfile />}
    </>
  );
  
};

export default Profile;
