import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const SecurityModal = () => {
  const [SecurityModal, setScurityModal] = useState(false);

  const MySecurityModal = () => {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 ">
          <div className="p-2 bg-gray-100 ">
            <div className="flex justify-end text-black ">
              <div>
                <button
                  onClick={() => setScurityModal(false)}
                  className="text-xl text-black place-self-end"
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

            <div className="flex justify-end gap-3">
              <div>
                <button className="px-2 text-white bg-blue-700 border rounded-md w-50">
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
        className="text-black "
      >
        Password
      </button>
      {showPasswordModal && <MySecurityModal />}
    </>
  );
};

export default Password;
