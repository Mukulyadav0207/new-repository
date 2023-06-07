
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

import Button from "../sharedComponents/ButtonComponent";

const EditNotificationTypes = () => {
 const [emailClicked, setEmailClicked] = useState(false);
 const [smsClicked, setSmsClicked] = useState(false);
 const [browserNotificationsClicked, setBrowserNotificationsClicked] =
   useState(false);
 const [showModal, setShowModal] = useState(false);

 const handleEmailToggle = () => {
   setEmailClicked(!emailClicked);
 };

 const handleSmsToggle = () => {
   setSmsClicked(!smsClicked);
 };

 const handleBrowserNotificationsToggle = () => {
   setBrowserNotificationsClicked(!browserNotificationsClicked);
 };

  const MyNotificationModal = () => {

    
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center w-[1260px]  h-[663px] bg-black bg-opacity-25 backdrop-blur-sm">
          <div className="p-4 bg-white rounded-md ">
            <div className="flex text-black justify-between items-center">
              <div className="flex items-center justify-center gap-1 ">
                <div className="font-bold ">Edit Notification Type</div>
              </div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl text-black place-self-end"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-x font-medium text-[#4B5563]">E-mail</p>
              <button
                className={`rounded-full  w-[24px] h-[12px] flex items-center  focus:outline-none ${
                  emailClicked ? "bg-[#1A13CB]" : "bg-gray-400"
                }`}
                onClick={handleEmailToggle}
              >
                <div
                  className={`bg-white rounded-full w-[10px] h-[10px] transform transition-all ml-0.5 ${
                    emailClicked ? "translate-x-2.5" : ""
                  } `}
                ></div>
              </button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-x font-medium text-[#4B5563]">SMS</p>
              <button
                className={`rounded-full  w-[24px] h-[12px] flex items-center  focus:outline-none ${
                  smsClicked ? "bg-[#1A13CB]" : "bg-gray-400"
                }`}
                onClick={handleSmsToggle}
              >
                <div
                  className={`bg-white rounded-full w-[10px] h-[10px] transform transition-all ml-0.5 ${
                    smsClicked ? "translate-x-2.5" : ""
                  } `}
                ></div>
              </button>
            </div>
            <div className="flex space-x-96 items-center mt-4 text-[#4B5563]">
              <p className="text-x font-medium">Browser Notifications</p>
              <button
                className={`rounded-full  w-[24px] h-[12px] flex items-center  focus:outline-none ${
                  browserNotificationsClicked ? "bg-[#1A13CB]" : "bg-gray-400"
                }`}
                onClick={handleBrowserNotificationsToggle}
              >
                <div
                  className={`bg-white rounded-full w-[10px] h-[10px] transform transition-all ml-0.5 ${
                    browserNotificationsClicked ? "translate-x-2.5" : ""
                  } `}
                ></div>
              </button>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button
                label="Cancel"
                border="1px solid "
                borderColor="#1A13CB"
                textColor="#1A13CB"
                padding="5px 8px"
                onClick={() => setShowModal(false)}
              />
              <Button
                label="Save"
                border="1px solid "
                backgroundColor="#1A13CB"
                textColor="white"
                padding="5px 16px"
                onClick={() => setShowModal(false)}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
      
      >
        <div className="text-sm">
          <FaEdit />
        </div>
      </button>
      {showModal && <MyNotificationModal />}
    </>
  );
};

export default EditNotificationTypes ;



