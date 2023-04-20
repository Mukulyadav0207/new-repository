import React,{useState} from "react"

import MyModal from  "../ShowModal";

const Modal =() =>{
    const [showModal,setShowModal] = useState(false);

const closeModal = () => setShowModal(false)


return (
  <>
    <button
      onClick={() => setShowModal(true)}
      className=" border  text-white rounded-md px-2 w-50 bg-blue-700 hover:bg-blue-600 "
    >
      + Add Department
    </button>
    {showModal && <MyModal closeModal={closeModal} />}
  </>
);

}

export default Modal;



