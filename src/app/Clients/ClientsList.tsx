import React, { useEffect } from "react";

import { BsSearch } from "react-icons/bs";
import Modal from "./ClientAdd";
import Filter from "./ClientsFilter";

import { Link } from "react-router-dom";
import { receiveClientsData } from "../../redux/actions/ClientsActions";
import { useSelector, useDispatch } from "react-redux";
import { IoIosEye } from "react-icons/io";

function Clients() {
  const clients = useSelector((state) => state.clients.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const clients = [
      {
        "Client Name": "ABC",
        "Project Name": "Project Name",
        "Company Name": "Abc",
        "Email Address": "abc@domain.com",
        "Start Date": "02/06/2022",
        Actions: IoIosEye,
      },
      {
        "Client Name": "ABC",
        "Project Name": "Project Name",
        "Company Name": "Abc",
        "Email Address": "abc@domain.com",
        "Start Date": "02/06/2022",
        Actions: IoIosEye,
      },
      {
        "Client Name": "ABC",
        "Project Name": "Project Name",
        "Company Name": "Abc",
        "Email Address": "abc@domain.com",
        "Start Date": "02/06/2022",
        Actions: IoIosEye,
      },
      {
        "Client Name": "ABC",
        "Project Name": "Project Name",
        "Company Name": "Abc",
        "Email Address": "abc@domain.com",
        "Start Date": "02/06/2022",
        Actions: IoIosEye,
      },
      {
        "Client Name": "ABC",
        "Project Name": "Project Name",
        "Company Name": "Abc",
        "Email Address": "abc@domain.com",
        "Start Date": "02/06/2022",
        Actions: IoIosEye,
      },
      {
        "Client Name": "ABC",
        "Project Name": "Project Name",
        "Company Name": "Abc",
        "Email Address": "abc@domain.com",
        "Start Date": "02/06/2022",
        Actions: IoIosEye,
      },
      {
        "Client Name": "ABC",
        "Project Name": "Project Name",
        "Company Name": "Abc",
        "Email Address": "abc@domain.com",
        "Start Date": "02/06/2022",
        Actions: IoIosEye,
      },
      {
        "Client Name": "ABC",
        "Project Name": "Project Name",
        "Company Name": "Abc",
        "Email Address": "abc@domain.com",
        "Start Date": "02/06/2022",
        Actions: IoIosEye,
      },
      {
        "Client Name": "ABC",
        "Project Name": "Project Name",
        "Company Name": "Abc",
        "Email Address": "abc@domain.com",
        "Start Date": "02/06/2022",
        Actions: IoIosEye,
      },
    ];

    dispatch(receiveClientsData(clients));
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="flex ">
          <div>
            <h3 className="font-bold ">Clients</h3>
          </div>

          <div className="flex justify-end flex-grow gap-4 ">
            <div className="relative flex justify-end ">
              <input
                className="rounded-md "
                type="text"
                placeholder="Search keyword"
              />
              <BsSearch className="absolute -translate-y-1/2 right-1 top-1/2 " />
            </div>
            <div>
              <Filter />
            </div>
            <div>
              <Modal />
            </div>
          </div>
        </div>
        <div className="w-full  mt-4   table-auto  h-[550px] ">
          <table className="mt-4 w-full  h-[530px] ">
            <thead>
              <tr className="tracking-tighter bg-slate-100">
                <th className="px-2 py-2 font-semibold">Client Name</th>
                <th className="px-2 py-2 font-semibold">Project Name</th>
                <th className="px-2 py-2 font-semibold">Company Name</th>
                <th className="px-2 py-2 font-semibold">Email Address</th>
                <th className="px-2 py-2 font-semibold">Start Date</th>
                <th className="px-2 py-2 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {clients.map((client, index) => (
                <tr
                  key={index}
                  className="text-center text-[#A59F9F] font-medium text-sm"
                >
                  <td className="px-2 py-2 border">{client["Client Name"]}</td>
                  <td className="px-1 py-2 border">{client["Project Name"]}</td>
                  <td className="px-2 py-2 border">{client["Company Name"]}</td>
                  <td className="px-2 py-2 border">
                    {client["Email Address"]}
                  </td>
                  <td className="px-2 py-2 border">{client["Start Date"]}</td>
                  <td className="px-4 py-2 border">
                    <Link to="/clients/details/1">
                      <button className="text-gray-500 hover:text-black">
                        <client.Actions />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Clients;

// function Client() {
//   return (
//     <>
<div className="flex ">
  <div>
    <h3 className="font-bold ">Clients</h3>
  </div>

  <div className="flex justify-end flex-grow gap-4 ">
    <div className="relative flex justify-end ">
      <input className="rounded-md " type="text" placeholder="Search keyword" />
      <BsSearch className="absolute -translate-y-1/2 right-1 top-1/2 " />
    </div>
    <div>
      <Filter />
    </div>
    <div>
      <Modal />
    </div>
  </div>
</div>;

//       <div>
//         <table className="w-full mx-auto mt-4 border-collapse table-auto">
//           <thead>
//             <tr className="bg-slate-100">
//               <th className="px-4 py-2 font-semibold">Client Name</th>
//               <th className="px-4 py-2 font-semibold">Project Name</th>
//               <th className="px-4 py-2 font-semibold">Company Name</th>
//               <th className="px-4 py-2 font-semibold">Email Address</th>
//               <th className="px-4 py-2 font-semibold">Start Date</th>
//               <th className="px-4 py-2 font-semibold">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             <tr>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>

//               <td className="px-4 py-2 border">
//                 <Link to="/clients/details/1">
//                   <button className="text-gray-500 hover:text-black">
//                     <AiFillEye />
//                   </button>
//                 </Link>
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>

//               <td className="px-4 py-2 border">
//                 <Link to="/clients/details/2">
//                   <button className="text-gray-500 hover:text-black">
//                     <AiFillEye />
//                   </button>
//                 </Link>
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2 border">abca</td>
//               <td className="px-4 py-2 border">abca</td>
//               <td className="px-4 py-2 border">abca</td>
//               <td className="px-4 py-2 border">abca</td>
//               <td className="px-4 py-2 border">abca</td>

//               <td className="px-4 py-2 border">
//                 <AiFillEye className="text-gray-500 hover:text-black" />
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2 border">abcabc</td>
//               <td className="px-4 py-2 border">abcabc</td>
//               <td className="px-4 py-2 border">abcabc</td>
//               <td className="px-4 py-2 border">abcabc</td>
//               <td className="px-4 py-2 border">abcabc</td>

//               <td className="px-4 py-2 border">
//                 <AiFillEye className="text-gray-500 hover:text-black" />
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>

//               <td className="px-4 py-2 border">
//                 <AiFillEye className="text-gray-500 hover:text-black" />
//               </td>
//             </tr>

//             <tr>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>

//               <td className="px-4 py-2 border">
//                 <AiFillEye className="text-gray-500 hover:text-black" />
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>

//               <td className="px-4 py-2 border">
//                 <AiFillEye className="text-gray-500 hover:text-black" />
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>

//               <td className="px-4 py-2 border">
//                 <AiFillEye className="text-gray-500 hover:text-black" />
//               </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>
//               <td className="px-4 py-2 border">abc</td>

//               <td className="px-4 py-2 border">
//                 <AiFillEye className="text-gray-500 hover:text-black" />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }
// export default Client;
