 
 import { FaSitemap } from "react-icons/fa";
 import { BsFillCalendar2Fill } from "react-icons/bs";
 import { FaCalendarDay } from "react-icons/fa";
 import { FaEnvelopeSquare } from "react-icons/fa";
 import { FaPhoneSquareAlt } from "react-icons/fa";
 import { RxCountdownTimer } from "react-icons/rx";
 import { BsLaptopFill } from "react-icons/bs";
 import { HiPencilAlt } from "react-icons/hi";
 
 
 
 
 
 
 
 
 
 
 
 
 function EmployeesGeneral() {
 const ticketDetails = [
   { icon: FaSitemap, label: "Department", value: "IT" },
   { icon: BsFillCalendar2Fill, label: "Joining Date", value: "01/11/2022" },
   { icon: FaCalendarDay, label: "Rollover Date", value: "10/11/2022" },
 ];


   const one= [
   { icon: FaEnvelopeSquare, label: "Company Email", value: "abc@domain.com" },
   { icon: FaEnvelopeSquare, label: "Personal Email", value: "xyz@domain.com" },];


    const two = [
      { icon: FaPhoneSquareAlt, label: "Phone Number", value: "XXXXXXXX78" },
      {
        icon: RxCountdownTimer,
        label: "Hours Engagement",
        value: "08 Hours /Day",
      },
    ];
 





  return (
    <div className="bg-white w-fit border rounded-md p-3 mt-3 text-x">
      <div className="flex-col text-center">
        <div className=" flex justify-start  ml-[95px] gap-x-[65px]  ">
          <div className="">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              className="w-10 h-10 rounded-full object-cover overflow-hidden"
            />
          </div>
          <div className=" flex text-xl">
            <BsLaptopFill /> <HiPencilAlt />
          </div>
        </div>
        <div className="header-content">
          <h2 className="text-base font-bold leading-none">
            Pratham Singh (02)
          </h2>
          <p className="text-[#A59F9F] leading-none mb-1">Developer</p>
        </div>
      </div>
      <div className="bg-[#E9F8F8] p-2 space-y-1">
        {ticketDetails.map((detail, index) => (
          <div key={index} className={` flex gap-1 text-x items-center  `}>
            <div className="ticket-icon">
              <detail.icon />
            </div>
            <div className="flex gap-6 justify-end ">
              <div className="  text-[#A59F9F]  w-[60px]">
                {detail.label}
              </div>
              <div className="  font-semibold  w-[120px]  text-end">
                {detail.value}
              </div>
            </div>
          </div>
        ))}

        <div className="flex gap-4">
          {one.map((detail, index) => (
            <div key={index} className={` flex gap-1 text-x items-center `}>
              <div className="ticket-icon">
                <detail.icon />
              </div>
              <div className="flex-col items-center">
                <div className="ticket-label text-[#A59F9F]  w-[90px] ">
                  {detail.label}
                </div>
                <div className="ticket-value font-semibold   text-black  ">
                  {detail.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          {two.map((detail, index) => (
            <div key={index} className={` flex gap-1 text-x items-center `}>
              <div className="ticket-icon">
                <detail.icon />
              </div>
              <div className="flex-col  items-center">
                <div className="ticket-label text-[#A59F9F]  w-[90px]">
                  {detail.label}
                </div>
                <div className="ticket-value font-semibold ">
                  {detail.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default EmployeesGeneral;
