import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

function SetSecurity() {

  
  const [showDiv, setShowDiv] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
const [phnVrfyModal, setPhnVrfyModal] = useState(false);
const [emlVrfyModal, setEmlVrfyModal] = useState(false);
const [securityModal, setSecurityModal]  = useState(false);


  const handlePhoneNumberToggle = () => {
    setShowDiv((prevState) => !prevState);
  };

  const handleEmailToggle = () => {
    setShowEmail((prevState) => !prevState);
  };

  

const ShowModal2 = () => setEmlVrfyModal(true);
const ShowModal1 = () => setPhnVrfyModal(true);
  const CloseModal1 = () => setPhnVrfyModal(false);



const MyNumberVrfy = () => {
  return (
    <>
      <div
        onClick={CloseModal1}
        className=" fixed  right- top-10 flex items-center justify-center bg-black bg-opacity-20 w-[985px] h-[565px]"
      >
        <div className="p-2 bg-gray-100 w-fit h-fit">
          <div className="flex gap-40 ">
            <div className="font-bold">Verify Your Phone Number</div>
            <div className="flex justify-end text-black grow-0 ">
              <button className="text-xl text-black place-self-end">
                <IoIosCloseCircle />
              </button>
            </div>
          </div>

          <label for="" className="text-sm">
            Enter the verification code send to your phone number.
          </label>
          <div>
            <input
              type="text"
              className="border rounded-md w-[335px] mt-2 mb-2"
            ></input>
          </div>

          <div className="flex ">
            <div>
              <button
                onClick={CloseModal1}
                className="px-2 text-white bg-blue-700 border rounded-md  w-[335px]"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const MyEmlVrfy = () => {
  return (
    <>
      <div className=" fixed  right-1/4 top-1/4 flex items-center justify-center bg-black bg-opacity-25 w-[990px] h-[581px]">
        <div className="p-3 bg-gray-100 w-fit h-fit">
          <div className="flex gap-40 ">
            <div className="font-bold">Verify Your Email Address</div>
            <div className="flex justify-end text-black grow-0 ">
              <button
                onClick={() => setEmlVrfyModal(false)}
                className="text-xl text-black place-self-end"
              >
                <IoIosCloseCircle />
              </button>
            </div>
          </div>

          <label for="" className="text-sm">
            Enter the verification code send to your phone number.
          </label>
          <div>
            <input
              type="text"
              className="border rounded-md w-[335px] mt-2 mb-2"
            ></input>
          </div>

          <div className="flex ">
            <div>
              <button
                onClick={() => setEmlVrfyModal(false)}
                className="px-2 text-white bg-blue-700 border rounded-md  w-[335px]"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



const MySecurity = () =>{

return (
  <div
   
    className=" absolute top-40  right-20 flex flex-col  p-6 space-y-4 bg-slate-200 w-[900px]  h-[400px]"
  >
    <div className="flex space-x-96">
      <p className="text-lg font-medium">Two-Factor Authentication</p>

      <button
        className={`rounded-full   bg-gray-400 w-11 h-5 flex items-center focus:outline-none ${
          showDiv && "bg-blue-600"
        }`}
        onClick={handlePhoneNumberToggle}
      >
        <div
          className={` rounded-full bg-white w-6 h-5 transform  transition-all ${
            showDiv && "translate-x-5 bg-white"
          }`}
        ></div>
      </button>
    </div>

    {showDiv && (
      <>
        <div className="flex space-x-96">
          <p className="text-lg font-medium">Phone Number</p>

          <button
            className={`rounded-full bg-gray-400 w-11 h-5 flex   focus:outline-none ${
              phnVrfyModal && "bg-blue-600"
            }`}
            onClick={ShowModal1}
          >
            {phnVrfyModal && <MyNumberVrfy />}
            <div
              className={`bg-white rounded-full w-6 h-5 transform transition-all  ${
                phnVrfyModal && "translate-x-5 bg-white"
              }`}
            ></div>
          </button>
        </div>

        <div className="flex space-x-96">
          <p className="text-lg font-medium">Email Address</p>

          <button
            onClick={ShowModal2}
            className={`rounded-full bg-gray-400 w-11 h-5 flex   focus:outline-none ${
              emlVrfyModal && "bg-blue-600"
            }`}
          >
            <div
              className={`bg-white rounded-full w-6 h-5 transform transition-all  ${
                emlVrfyModal && "translate-x-5 bg-white"
              }`}
            ></div>
          </button>
          {emlVrfyModal && <MyEmlVrfy />}
        </div>
        <div className="flex items-end justify-end mr-56 mt-7">
          <button className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg">
            Re-generate Backup Code
          </button>
        </div>
      </>
    )}
  </div>
);
}






  return (
    <>
      <button
        onClick={() => {
          setSecurityModal(true);
        }}
        className=""
      >
        Security
      </button>
      {securityModal && <MySecurity />}
    </>
  );
}

export default SetSecurity;

 