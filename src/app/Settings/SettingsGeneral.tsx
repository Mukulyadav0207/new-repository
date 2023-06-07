
import { IoIosCloseCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React, { useState } from "react";
import Button from "../sharedComponents/ButtonComponent";
import Input from "../sharedComponents/InputComponent";

const General = () => {
 
 
    return (
      <>
        <div className="p-3 rounded-md bg-[#FFFFFF] w-[1060px] mt-4  h-[470px]">
          <div className="flex gap-3 ">
            <div>
              <label className="text-sm text-[#4B5563] mb-1 ">First Name</label>

              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={510}
                height={35}
                type="text"
                textColor="#A19D9D"
              />
            </div>
            <div>
              <label className="text-sm text-[#4B5563] mb-1">Last Name</label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={510}
                height={35}
                type="text"
                textColor="#A19D9D"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-2 ">
            <div>
              <label className="text-sm text-[#4B5563] ">Date Of Birth</label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={510}
                height={35}
                type="date"
                textColor="#A19D9D"
              />
            </div>
            <div>
              <label className="text-sm text-[#4B5563]">Gender</label>
              <Input
                padding="2px 3px"
                border="1px solid black"
                borderColor="#A19D9D"
                width={510}
                height={35}
                type="text"
                textColor="#A19D9D"
              />
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-sm text-[#4B5563] ">E-mail Address</label>
            <Input
              padding="2px 3px"
              border="1px solid black"
              borderColor="#A19D9D"
              width="full"
              height={35}
              type="text"
              textColor="#A19D9D"
              value="abc@domain.com"
            />
          </div>

          <div className="flex items-end justify-start gap-3 mt-2 ">
            <div className="flex flex-col items-center justify-center">
              <div>Photo</div>
              <div>
                <CgProfile className="text-4xl" />
              </div>
            </div>
            <Button
              label="Change"
              border="1px solid "
              borderColor="#1A13CB"
              textColor="#1A13CB"
              padding="5px 8px"
            />
          </div>

          <div className="flex justify-end gap-3 mt-3">
            <Button
              label="Cancel"
              border="1px solid "
              borderColor="#1A13CB"
              textColor="#1A13CB"
              padding="5px 8px"
            />
            <Button
              label="Save"
              border="1px solid "
              backgroundColor="#1A13CB"
              textColor="white"
              padding="5px 16px"
            />
          </div>
        </div>
      </>
    );
  };

 
export default General;





// import { IoIosCloseCircle } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
// import React, { useState } from "react";

// const General = () => {
//   const [showGeneral, setShowGeneral] = useState(false);

//   const closeModal = () => setShowGeneral(false);

//   const MyGeneral = () => {
//     return (
//       <>
//         <div className="fixed flex left-50 top-40 bg-opacity-5">
//           <div className="p-3 bg-gray-100 w-[900px]  h-[400px]">
//             <div className="flex text-black ">
//               <div className="flex justify-end flex-grow">
//                 <button onClick={closeModal} className="text-xl text-black ">
//                   <IoIosCloseCircle />
//                 </button>
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <div>
//                 <label for="text" className="text-sm">
//                   First Name
//                 </label>
//                 <div>
//                   <input
//                     type="text"
//                     className="border rounded-md w-[400px] mt-2 mb-2"
//                   ></input>
//                 </div>
//               </div>
//               <div>
//                 <label for="" className="text-sm">
//                   Last Name
//                 </label>
//                 <div>
//                   <input
//                     type="text"
//                     className="border rounded-md w-[400px] mt-2 mb-2"
//                   ></input>
//                 </div>
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <div>
//                 <label for="date" className="text-sm">
//                   Date Of Birth
//                 </label>
//                 <div>
//                   <input
//                     type="date"
//                     className="border rounded-md w-[400px] mt-2 mb-2"
//                   ></input>
//                 </div>
//               </div>
//               <div>
//                 <label for="" className="text-sm">
//                   Gender
//                 </label>
//                 <div>
//                   <input
//                     type="number"
//                     className="border rounded-md w-[400px]  mt-2 mb-2"
//                   ></input>
//                 </div>
//               </div>
//             </div>
//             <label for="email" className="text-sm">
//               E-mail Address
//             </label>
//             <div className="w-50 ">
//               <input
//                 type="email address"
//                 className="w-full mt-2 mb-2 border rounded-md"
//               ></input>
//             </div>

//             <div className="flex items-center justify-start gap-3 m-2">
//               <div className="flex flex-col items-center justify-start">
//                 <div>Photo</div>
//                 <div>
//                   <CgProfile className="text-4xl" />
//                 </div>
//               </div>
//               <button className="px-2 text-blue-700 border border-blue-700 rounded-md w-50">
//                 Change
//               </button>
//             </div>

//             <div className="flex justify-end gap-3 mt-3">
//               <button
//                 onClick={closeModal}
//                 className="px-2 text-white bg-blue-700 border rounded-md w-50"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <>
//       <button
//         onClick={() => {
//           setShowGeneral(true);
//         }}
//         className=""
//       >
//         General
//       </button>
//       {showGeneral && <MyGeneral />}
//     </>
//   );
// };

// export default General;
