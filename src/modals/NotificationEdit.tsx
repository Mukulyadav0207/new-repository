
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";



const NotificationNotes = () => {
  const [showModal, setShowModal] = useState(false);

  const MyNotificationModal = () => {

    const [isClicked,setIsClicked] = useState(true);
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center w-[1150px]  h-[663px] bg-black bg-opacity-25 backdrop-blur-sm">
          <div className="p-2 bg-gray-100 ">
            <div className="flex text-black gap-60">
              <div className="flex items-center justify-center gap-1 ">
                <div className="font-bold">Edit Notification Type</div>
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



            <div className="flex space-x-96">
              <p className="text-lg font-medium">E-mail</p>

            
            </div>





            <div className="flex justify-end gap-3">
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-2 text-blue-700 border border-blue-700 rounded-md w-50"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button className="px-2 text-white bg-blue-700 border rounded-md w-50">
                  Save
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

export default NotificationNotes;



