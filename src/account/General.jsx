
import { IoIosCloseCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React, { useState } from "react";



const General = (MyGeneral) => {
  const [showGeneral, setShowGeneral] = useState(false);

  const closeModal = () => setShowGeneral(false);

  return (
    <>
      <button
        onClick={() => {
          setShowGeneral(true);
        }}
        className=""
      >
        General
      </button>
      {showGeneral && <MyGeneral closeModal={closeModal} />}
    </>
  );
};






  
  const MyGeneral = ({closeModal} ) => {
    return (
      <>
        <div className="fixed flex left-50 top-40 bg-opacity-5">
          <div className="p-3 bg-gray-100 w-[900px]  h-[400px]">
            <div className="flex text-black ">
              <div className="flex justify-end flex-grow">
                <button onClick={closeModal} className="text-xl text-black ">
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <label for="text" className="text-sm">
                  First Name
                </label>
                <div>
                  <input
                    type="text"
                    className="border rounded-md w-[400px] mt-2 mb-2"
                  ></input>
                </div>
              </div>
              <div>
                <label for="" className="text-sm">
                  Last Name
                </label>
                <div>
                  <input
                    type="text"
                    className="border rounded-md w-[400px] mt-2 mb-2"
                  ></input>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <label for="date" className="text-sm">
                  Date Of Birth
                </label>
                <div>
                  <input
                    type="date"
                    className="border rounded-md w-[400px] mt-2 mb-2"
                  ></input>
                </div>
              </div>
              <div>
                <label for="" className="text-sm">
                  Gender
                </label>
                <div>
                  <input
                    type="number"
                    className="border rounded-md w-[400px]  mt-2 mb-2"
                  ></input>
                </div>
              </div>
            </div>
            <label for="email" className="text-sm">
              E-mail Address
            </label>
            <div className="w-50 ">
              <input
                type="email address"
                className="w-full mt-2 mb-2 border rounded-md"
              ></input>
            </div>

            <div className="flex items-center justify-start gap-3 m-2">
              <div className="flex flex-col items-center justify-start">
                <div>Photo</div>
                <div>
                  <CgProfile className="text-4xl" />
                </div>
              </div>
              <button className="px-2 text-blue-700 border border-blue-700 rounded-md w-50">
                Change
              </button>
            </div>

            <div className="flex justify-end gap-3 mt-3">
              <button
                onClick={closeModal}
                className="px-2 text-white bg-blue-700 border rounded-md w-50"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

 
export { General, MyGeneral };
