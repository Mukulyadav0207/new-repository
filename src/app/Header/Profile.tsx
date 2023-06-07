import { CgProfile } from "react-icons/cg";
import React,{useState} from "react";
import { FC, InputHTMLAttributes } from "react";
import {Link} from "react-router-dom";
import {IoMdSettings  } from "react-icons/io";
import { GoSignOut } from "react-icons/go";




const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showGeneral, setShowGeneral] = useState(false);
  const setModal= () => setShowProfile(true);
  




  
  const MyProfile = () => {
    return (
      <div
        onClick={() => setShowProfile(false)}
        className="absolute right-5 top-8  bg-white border border-black rounded-md  w-[125px] h-[90px]"
      >
        <div className="flex flex-col gap-3 pl-0 p-3   ">
          <Link to="/app/settings" className=" hover:text-red-200">
            <div className="flex items-center justify-center gap-1">
              <div>
                <IoMdSettings />
              </div>
              <div>
                <button >Settings</button>
              </div>
            </div>
          </Link>
          <Link className=" hover:text-red-200" to="/signout">
            <div className="flex items-center justify-center gap-1">
              <div>
                <GoSignOut />
              </div>
              <div>Sign out</div>
            </div>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        <CgProfile className="text-xl " />
      </button>

      {showProfile && <MyProfile />}
    </>
  );
};

export default Profile;
