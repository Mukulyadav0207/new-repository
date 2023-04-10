import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Password = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const PasswordModal = () => {
    return (
      <>
        <div className=" fixed inset-0 bg-black bg-opacity-25    flex justify-center items-center   ">
          <div className="  bg-gray-100   p-2  ">
            <div className=" text-black flex justify-end ">
             
              <div>
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="text-black text-xl place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <label for="" className="text-sm">
              Old Password
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[300px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              New Password
            </label>
            <div>
              <input
                type="text"
                className="border rounded-md w-[300px] mt-2 mb-2"
              ></input>
            </div>

            <label for="" className="text-sm">
              Confirm New Password
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="border rounded-md w-[300px] mt-2 mb-2"
              ></input>
            </div>

           

            <div className="flex flex gap-3 justify-end">
              
              <div>
                <button className=" border text-white  bg-blue-700 rounded-md px-2 w-50 ">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <button
        onClick={() => setShowPasswordModal(true)}
        className="   text-black "
      >
        Password
      </button>
      {showPasswordModal && <PasswordModal />}
    </>
  );
};

export default Password;
